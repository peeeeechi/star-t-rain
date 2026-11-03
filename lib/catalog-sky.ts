import { BufferGeometry, Color, Float32BufferAttribute, SRGBColorSpace } from 'three';
import catalog from './data/orion-stars.json';
import { equatorialDirection, stellarAppearance, stellarColor } from './sky-model.mjs';

export function createCatalogSky(mobile: boolean): BufferGeometry {
  const stars = catalog.stars.filter((row) => row[3]! <= (mobile ? 7 : 8));
  const count = stars.length;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const intensities = new Float32Array(count);
  const phases = new Float32Array(count);
  const flares = new Float32Array(count);
  const color = new Color();
  stars.forEach(([id, ra, dec, mag, ci], i) => {
    const direction = equatorialDirection(ra!, dec!);
    positions.set(direction.map((value: number) => value * 1000), i * 3);
    const [r, g, b] = stellarColor(ci);
    color.setRGB(r, g, b, SRGBColorSpace);
    colors.set([color.r, color.g, color.b], i * 3);
    const appearance = stellarAppearance(mag!);
    sizes[i] = appearance.size;
    intensities[i] = appearance.intensity;
    flares[i] = appearance.flare;
    // Only the sparkle phase is procedural; catalog coordinates never jitter.
    phases[i] = ((id! * 0.61803398875) % 1) * Math.PI * 2;
  });
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.setAttribute('starSize', new Float32BufferAttribute(sizes, 1));
  geometry.setAttribute('brightness', new Float32BufferAttribute(intensities, 1));
  geometry.setAttribute('phase', new Float32BufferAttribute(phases, 1));
  geometry.setAttribute('flare', new Float32BufferAttribute(flares, 1));
  return geometry;
}
