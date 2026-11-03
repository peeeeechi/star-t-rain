export const screenVertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 1.0, 1.0);
  }
`;

export const nebulaFragment = `
  uniform float aspect;
  uniform float time;
  uniform vec2 drift;
  varying vec2 vUv;

  float hash(vec2 p) {
    vec3 q = fract(vec3(p.xyx) * 0.1031);
    q += dot(q, q.yzx + 33.33);
    return fract((q.x + q.y) * q.z);
  }
  float noise(vec2 p) {
    vec2 cell = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(cell), hash(cell + vec2(1, 0)), f.x),
               mix(hash(cell + vec2(0, 1)), hash(cell + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float sum = 0.0, amplitude = 0.5;
    mat2 turn = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 5; i++) {
      sum += amplitude * noise(p);
      p = turn * p * 2.03 + vec2(7.1, 3.8);
      amplitude *= 0.5;
    }
    return sum;
  }
  void main() {
    vec2 p = (vUv - 0.5) * vec2(aspect, 1.0);
    p += drift * 0.012 + vec2(time * 0.002, 0.0);
    float broad = fbm(p * 2.8 + vec2(3.7, 8.2));
    float wisps = fbm(p * 7.0 + broad * 1.8);
    float detail = fbm(p * 19.0 + vec2(broad, wisps));
    float lane = p.y - p.x * 0.28 + sin(p.x * 2.0) * 0.045;
    float band = exp(-pow((lane + (broad - 0.5) * 0.28) * 4.5, 2.0));
    float mist = smoothstep(0.18, 0.8, wisps) * band;
    float filaments = pow(max(0.0, detail * 1.3), 3.0) * band;
    float dust = smoothstep(0.38, 0.67, broad + wisps * 0.18) * band;
    vec3 blue = vec3(0.12, 0.22, 0.34);
    vec3 violet = vec3(0.22, 0.16, 0.27);
    vec3 color = vec3(0.009, 0.015, 0.033);
    color += mix(blue, violet, smoothstep(-0.8, 0.8, p.x)) * mist * 0.75;
    color += vec3(0.15, 0.22, 0.30) * filaments * 0.22;
    color *= 1.0 - dust * 0.55;
    float glow = exp(-length((p - vec2(-0.25, -0.04)) * vec2(1.3, 3.0)) * 2.0);
    color += vec3(0.025, 0.045, 0.075) * glow;
    // Store display-space color in the small 8-bit target to preserve dark gradients.
    color += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export const starVertex = `
  attribute vec3 color;
  attribute float starSize;
  attribute float phase;
  attribute float flare;
  uniform float time;
  uniform float pixelRatio;
  uniform float opacity;
  varying vec3 starColor;
  varying float intensity;
  varying float diffraction;
  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    float depth = max(1.0, -viewPosition.z);
    starColor = color;
    diffraction = flare;
    float glint = pow(max(0.0, sin(time * 1.25 + phase)), 8.0) * flare;
    intensity = opacity * (0.72 + 0.2 * sin(time * 0.8 + phase) + glint * 0.7)
      * smoothstep(3.0, 25.0, depth)
      * (1.0 - smoothstep(1100.0, 1700.0, depth));
    gl_PointSize = clamp(starSize * pixelRatio * 290.0 / depth, 1.0, 64.0 * pixelRatio);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

export const starFragment = `
  varying vec3 starColor;
  varying float intensity;
  varying float diffraction;
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    float r2 = dot(p, p);
    float core = exp(-r2 * mix(18.0, 95.0, diffraction));
    float halo = exp(-r2 * 5.5) * 0.16;
    float rays = exp(-abs(p.x) * 105.0) * pow(max(0.0, 1.0 - abs(p.y)), 2.5)
               + exp(-abs(p.y) * 105.0) * pow(max(0.0, 1.0 - abs(p.x)), 2.5);
    float alpha = (core + halo + rays * diffraction * 0.42) * intensity;
    if (alpha < 0.008) discard;
    gl_FragColor = vec4(starColor, alpha);
    #include <colorspace_fragment>
  }
`;

export const meteorVertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const trailFragment = `
  uniform vec3 tint;
  uniform float opacity;
  uniform float time;
  varying vec2 vUv;
  void main() {
    float age = 1.0 - vUv.x;
    float side = (vUv.y - 0.5) * 2.0;
    float core = exp(-pow(side / (0.035 + age * 0.05), 2.0));
    float halo = exp(-side * side * 12.0) * 0.22;
    float taper = pow(vUv.x, 1.6) * smoothstep(0.0, 0.12, vUv.x);
    float shimmer = 0.94 + 0.06 * sin(age * 70.0 - time * 5.0);
    gl_FragColor = vec4(mix(tint, vec3(1.0), pow(vUv.x, 5.0) * 0.8),
      (core + halo) * taper * opacity * shimmer);
    #include <colorspace_fragment>
  }
`;

export const meteorHeadFragment = `
  uniform vec3 tint;
  uniform float opacity;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r2 = dot(p, p);
    float core = exp(-r2 * 180.0);
    float halo = exp(-r2 * 7.5) * 0.15;
    float rays = exp(-abs(p.x) * 140.0) * pow(max(0.0, 1.0 - abs(p.y)), 4.0)
               + exp(-abs(p.y) * 140.0) * pow(max(0.0, 1.0 - abs(p.x)), 4.0);
    gl_FragColor = vec4(mix(tint, vec3(1.0), core), (core + halo + rays * 0.15) * opacity);
    #include <colorspace_fragment>
  }
`;
