import {
  AdditiveBlending, BufferGeometry, Color, Float32BufferAttribute,
  Group, Mesh, OrthographicCamera, PerspectiveCamera, PlaneGeometry,
  Points, Scene, ShaderMaterial, Vector2, WebGLRenderer, WebGLRenderTarget,
} from 'three';
import {
  meteorHeadFragment, meteorVertex, nebulaFragment, screenVertex,
  starFragment, starVertex, trailFragment,
} from './cosmic-intro-shaders';

const DURATION = 4600;
const smooth = (a: number, b: number, value: number) => {
  const t = Math.min(1, Math.max(0, (value - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// The nebula is rendered into a small offscreen texture; stars and meteor
// cores remain at full resolution. No images or postprocessing libraries load.
export function startCosmicIntro(
  canvas: HTMLCanvasElement,
  onComplete: () => void,
  onProgress: (percent: number) => void,
  ambient = false,
): () => void {
  const mobile = window.innerWidth < 768;
  const renderer = new WebGLRenderer({ canvas, alpha: false, antialias: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.5));
  renderer.setClearColor(0x030611, 1);
  const scene = new Scene();
  const camera = new PerspectiveCamera(62, 1, 0.1, 1800);
  const screenGeometry = new PlaneGeometry(2, 2);
  const billboardGeometry = new PlaneGeometry(1, 1);
  const geometries: BufferGeometry[] = [screenGeometry, billboardGeometry];
  const materials: ShaderMaterial[] = [];
  const cloudTarget = new WebGLRenderTarget(1, 1, { depthBuffer: false, stencilBuffer: false });
  const cloudScene = new Scene();
  const cloudCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const cloudMaterial = new ShaderMaterial({
    uniforms: { aspect: { value: 1 }, time: { value: 0 }, drift: { value: new Vector2() } },
    vertexShader: screenVertex,
    fragmentShader: nebulaFragment,
    depthTest: false,
    depthWrite: false,
  });
  const cloudPlane = new Mesh(screenGeometry, cloudMaterial);
  cloudPlane.frustumCulled = false;
  cloudScene.add(cloudPlane);
  const skyMaterial = new ShaderMaterial({
    uniforms: { sky: { value: cloudTarget.texture }, reveal: { value: 0 } },
    vertexShader: screenVertex,
    fragmentShader: `
      uniform sampler2D sky;
      uniform float reveal;
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(mix(vec3(0.012, 0.024, 0.05), texture2D(sky, vUv).rgb, reveal), 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
  });
  const sky = new Mesh(screenGeometry, skyMaterial);
  sky.frustumCulled = false;
  sky.renderOrder = -100;
  scene.add(sky);
  materials.push(cloudMaterial, skyMaterial);

  // A seeded distribution makes the composition consistent on repeat visits.
  let seed = 0x78b3fd;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const palette = [0xcbdfff, 0xe1ebff, 0xafc9ee, 0xe8e7f3, 0xd2bde5, 0xf0dab5].map((hex) => new Color(hex));
  const makeStarMaterial = () => {
    const material = new ShaderMaterial({
      transparent: true, depthWrite: false, depthTest: false, blending: AdditiveBlending,
      uniforms: { time: { value: 0 }, opacity: { value: 1 }, pixelRatio: { value: renderer.getPixelRatio() } },
      vertexShader: starVertex, fragmentShader: starFragment,
    });
    materials.push(material);
    return material;
  };
  const count = ambient ? (mobile ? 1800 : 5500) : (mobile ? 6500 : 13000);
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const phases = new Float32Array(count);
  const flares = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const bright = i < 14;
    const inBand = random() < 0.65;
    const x = (random() - 0.5) * (bright ? 580 : 1800);
    const spread = (random() + random() + random() - 1.5);
    positions[i * 3] = x;
    positions[i * 3 + 1] = bright ? spread * 230 : inBand ? x * 0.28 + spread * 230 : spread * 900;
    positions[i * 3 + 2] = bright ? -120 - random() * 240 : -random() * 1450;
    const color = palette[Math.floor(random() * palette.length)];
    colors.set([color.r, color.g, color.b], i * 3);
    sizes[i] = bright ? 32 + random() * 22 : 1.1 + Math.pow(random(), 5) * 8;
    phases[i] = random() * Math.PI * 2;
    flares[i] = bright ? 1 : 0;
  }
  const starGeometry = new BufferGeometry();
  starGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  starGeometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  starGeometry.setAttribute('starSize', new Float32BufferAttribute(sizes, 1));
  starGeometry.setAttribute('phase', new Float32BufferAttribute(phases, 1));
  starGeometry.setAttribute('flare', new Float32BufferAttribute(flares, 1));
  geometries.push(starGeometry);
  const starMaterial = makeStarMaterial();
  const stars = new Points(starGeometry, starMaterial);
  stars.renderOrder = 1;
  scene.add(stars);

  const meteorSettings = [
    { start: 0.55, duration: 1.35, from: [-0.18, 0.78], to: [0.70, 0.34], depth: 340, length: 0.19, width: 9, head: 28, strength: 0.62, tint: 0xc4d9ff },
    { start: 1.55, duration: 1.60, from: [0.12, 1.08], to: [1.15, 0.12], depth: 170, length: 0.32, width: 17, head: 48, strength: 1.15, tint: 0xb3d7ff },
    { start: 3.15, duration: 1.05, from: [0.58, 0.86], to: [1.15, 0.51], depth: 500, length: 0.12, width: 7, head: 22, strength: 0.5, tint: 0xe4e7fc },
  ];
  const meteors = meteorSettings.map((settings) => {
    const group = new Group();
    group.visible = false;
    scene.add(group);
    const uniforms = { tint: { value: new Color(settings.tint) }, opacity: { value: 0 }, time: { value: 0 } };
    const tailMaterial = new ShaderMaterial({
      uniforms, vertexShader: meteorVertex, fragmentShader: trailFragment,
      transparent: true, depthWrite: false, depthTest: false, blending: AdditiveBlending,
    });
    const headMaterial = new ShaderMaterial({
      uniforms, vertexShader: meteorVertex, fragmentShader: meteorHeadFragment,
      transparent: true, depthWrite: false, depthTest: false, blending: AdditiveBlending,
    });
    materials.push(tailMaterial, headMaterial);
    const tail = new Mesh(billboardGeometry, tailMaterial);
    const head = new Mesh(billboardGeometry, headMaterial);
    tail.renderOrder = 10;
    head.renderOrder = 12;
    group.add(tail, head);
    const dustCount = mobile ? 20 : 36;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);
    const dustSizes = new Float32Array(dustCount);
    const dustPhases = new Float32Array(dustCount);
    const scatter = new Float32Array(dustCount);
    for (let i = 0; i < dustCount; i++) {
      dustColors.set([0.65, 0.78, 1], i * 3);
      dustSizes[i] = 0.6 + random() * 1.6;
      dustPhases[i] = random() * Math.PI * 2;
      scatter[i] = random() * 2 - 1;
    }
    const dustGeometry = new BufferGeometry();
    dustGeometry.setAttribute('position', new Float32BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute('color', new Float32BufferAttribute(dustColors, 3));
    dustGeometry.setAttribute('starSize', new Float32BufferAttribute(dustSizes, 1));
    dustGeometry.setAttribute('phase', new Float32BufferAttribute(dustPhases, 1));
    dustGeometry.setAttribute('flare', new Float32BufferAttribute(new Float32Array(dustCount), 1));
    geometries.push(dustGeometry);
    const dustMaterial = makeStarMaterial();
    const dust = new Points(dustGeometry, dustMaterial);
    dust.frustumCulled = false;
    dust.renderOrder = 11;
    group.add(dust);
    return { settings, group, tail, head, uniforms, dustGeometry, dustMaterial, scatter, dustCount };
  });

  let disposed = false;
  let completed = false;
  let reportedProgress = -1;
  let frame = 0;
  let cloudDirty = true;
  let lastCloudFrame = -Infinity;
  let pointerX = 0;
  let pointerY = 0;
  let viewportHeight = 1;
  let previousTime = performance.now();
  let lastRendered = -Infinity;
  const start = previousTime;
  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    const width = Math.max(1, bounds.width);
    const height = Math.max(1, bounds.height);
    viewportHeight = height;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    cloudMaterial.uniforms.aspect.value = camera.aspect;
    const cloudScale = Math.min(mobile ? 0.4 : 0.5, 1000 / width, 700 / height);
    cloudTarget.setSize(Math.max(1, Math.round(width * cloudScale)), Math.max(1, Math.round(height * cloudScale)));
    cloudDirty = true;
  };
  const pointer = (event: PointerEvent) => {
    pointerX = event.clientX / window.innerWidth - 0.5;
    pointerY = event.clientY / window.innerHeight - 0.5;
  };
  const contextLost = (event: Event) => {
    event.preventDefault();
    onComplete();
  };
  const render = (now: number) => {
    if (disposed) return;
    if (ambient && (document.hidden || now - lastRendered < 50)) {
      frame = requestAnimationFrame(render);
      return;
    }
    lastRendered = now;
    const elapsed = now - start;
    const time = elapsed / 1000;
    const progress = ambient ? 0.5 + Math.sin(time * 0.025) * 0.2 : Math.min(elapsed / DURATION, 1);
    const damping = 1 - Math.exp(-Math.min(now - previousTime, 50) / 320);
    previousTime = now;
    const reveal = smooth(0, 0.8, time);
    starMaterial.uniforms.time.value = time;
    starMaterial.uniforms.opacity.value = reveal;
    skyMaterial.uniforms.reveal.value = reveal;
    camera.position.z = 90 - 48 * smooth(0, 1, progress);
    camera.position.x += (pointerX * 8 - camera.position.x) * damping;
    camera.position.y += (-pointerY * 5 - camera.position.y) * damping;
    stars.rotation.z = -progress * 0.007;
    for (const meteor of meteors) {
      const { settings, group, tail, head, uniforms, dustGeometry, dustMaterial, scatter, dustCount } = meteor;
      const flight = ((ambient ? (time + 2) % 26 : time) - settings.start) / settings.duration;
      group.visible = flight >= 0 && flight <= 1;
      if (!group.visible) continue;
      const height = 2 * Math.tan(camera.fov * Math.PI / 360) * settings.depth;
      const width = height * camera.aspect;
      const perPixel = height / viewportHeight;
      const x = settings.from[0] + (settings.to[0] - settings.from[0]) * flight;
      const y = settings.from[1] + (settings.to[1] - settings.from[1]) * flight;
      group.position.set(camera.position.x + (x - 0.5) * width, camera.position.y + (y - 0.5) * height, camera.position.z - settings.depth);
      group.rotation.z = Math.atan2((settings.to[1] - settings.from[1]) * height, (settings.to[0] - settings.from[0]) * width);
      const length = width * settings.length * smooth(0, 0.18, flight);
      tail.scale.set(length, perPixel * settings.width, 1);
      tail.position.x = -length / 2;
      head.scale.setScalar(perPixel * settings.head);
      const intensity = settings.strength * smooth(0, 0.12, flight) * (1 - smooth(0.6, 1, flight));
      uniforms.opacity.value = intensity;
      uniforms.time.value = time;
      dustMaterial.uniforms.time.value = time;
      dustMaterial.uniforms.opacity.value = intensity * 0.55;
      const dustPosition = dustGeometry.getAttribute('position');
      for (let i = 0; i < dustCount; i++) {
        const age = (i + 1) / dustCount;
        dustPosition.setXYZ(i, -length * age * 0.92, scatter[i] * perPixel * (1 + age * 6), 0);
      }
      dustPosition.needsUpdate = true;
    }
    // The gas moves slowly enough to update at <=25fps in a smaller framebuffer.
    if (cloudDirty || now - lastCloudFrame >= 40) {
      cloudMaterial.uniforms.time.value = time;
      cloudMaterial.uniforms.drift.value.set(camera.position.x / 8, camera.position.y / 5);
      renderer.setRenderTarget(cloudTarget);
      renderer.render(cloudScene, cloudCamera);
      renderer.setRenderTarget(null);
      cloudDirty = false;
      lastCloudFrame = now;
    }
    renderer.render(scene, camera);
    // Report the rendered opening sequence, rather than inventing download progress.
    const percent = Math.floor(progress * 100);
    if (!ambient && percent !== reportedProgress) {
      reportedProgress = percent;
      onProgress(percent);
    }
    if (!ambient && progress === 1 && !completed) {
      completed = true;
      onComplete();
    }
    frame = requestAnimationFrame(render);
  };

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', pointer, { passive: true });
  canvas.addEventListener('webglcontextlost', contextLost);
  resize();
  frame = requestAnimationFrame(render);

  return () => {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', pointer);
    canvas.removeEventListener('webglcontextlost', contextLost);
    for (const geometry of geometries) geometry.dispose();
    for (const material of materials) material.dispose();
    cloudTarget.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
  };
}
