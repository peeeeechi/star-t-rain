// Usage: node scripts/generate-catalog-sky.mjs /path/to/hygdata_v41.csv
// No runtime catalog request: commit only the compact subset and static skies.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { equatorialDirection, orientDirection, stellarAppearance, stellarColor, SKY_VIEW } from '../lib/sky-model.mjs';

const expectedHash = 'd9f69fd86bbf90a4e4d52b4c5c53eacfa6dfc0bfdef85bfd94f095e0bebe4ebd';
const source = 'https://raw.githubusercontent.com/astronexus/HYG-Database/c7f7f883fe678cc7680169a50ccd7dcc49b060ce/hyg/CURRENT/hygdata_v41.csv';
if (!process.argv[2]) throw new Error('Pass the downloaded HYG v4.1 CSV path.');
const input = readFileSync(process.argv[2]);
if (createHash('sha256').update(input).digest('hex') !== expectedHash) {
  throw new Error('The source CSV does not match the pinned HYG v4.1 file.');
}

function csvRow(line) {
  const fields = [];
  let field = '', quoted = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (quoted && line[i + 1] === '"') { field += '"'; i++; }
      else quoted = !quoted;
    } else if (char === ',' && !quoted) { fields.push(field); field = ''; }
    else field += char;
  }
  fields.push(field);
  return fields;
}

const lines = input.toString('utf8').trim().split(/\r?\n/);
const columns = csvRow(lines.shift());
const index = Object.fromEntries(columns.map((name, i) => [name, i]));
for (const field of ['id', 'ra', 'dec', 'mag', 'ci']) {
  if (!(field in index)) throw new Error(`Missing source column: ${field}`);
}
const stars = [];
for (const line of lines) {
  const row = csvRow(line);
  const id = Number(row[index.id]);
  const ra = Number(row[index.ra]);
  const dec = Number(row[index.dec]);
  const mag = Number(row[index.mag]);
  const ci = row[index.ci] === '' ? null : Number(row[index.ci]);
  if (!id || ![ra, dec, mag].every(Number.isFinite) || mag > 8) continue;
  if (ra < 0 || ra >= 24 || dec < -90 || dec > 90 || (ci !== null && !Number.isFinite(ci))) {
    throw new Error(`Invalid coordinates or color for HYG ${id}`);
  }
  const direction = equatorialDirection(ra, dec);
  // Retain a generous field around both orientations, including ultrawide screens.
  const visible = [false, true].some((mobile) => {
    const [x, y, z] = orientDirection(direction, mobile);
    return z < -0.15 && Math.abs(y / z) < 0.66 && Math.abs(x / z) < 2.6;
  });
  if (visible) stars.push([id, ra, dec, mag, ci]);
}
if (stars.length < 1000) throw new Error('Unexpectedly small catalog subset.');
stars.sort((a, b) => a[3] - b[3] || a[0] - b[0]);
const dataDir = fileURLToPath(new URL('../lib/data/', import.meta.url));
const publicDir = fileURLToPath(new URL('../public/sky/', import.meta.url));
mkdirSync(dataDir, { recursive: true });
mkdirSync(publicDir, { recursive: true });
writeFileSync(`${dataDir}orion-stars.json`, JSON.stringify({
  source, sha256: expectedHash, license: 'CC-BY-SA-4.0', epoch: 'J2000.0',
  columns: ['hygId', 'raHours', 'decDegrees', 'visualMagnitude', 'bvColorIndex'],
  stars,
}) + '\n');

for (const mobile of [false, true]) {
  const width = mobile ? 1000 : 5000;
  const height = 1000;
  const scale = height / (2 * Math.tan(SKY_VIEW.verticalFovDegrees * Math.PI / 360));
  const elements = [];
  for (const [, ra, dec, mag, ci] of stars) {
    if (mag > 6.5) continue;
    const [vx, vy, vz] = orientDirection(equatorialDirection(ra, dec), mobile);
    if (vz >= 0) continue;
    const x = width / 2 + vx / -vz * scale;
    const y = height / 2 - vy / -vz * scale;
    if (x < 0 || x > width || y < 0 || y > height) continue;
    const { size, intensity, flare } = stellarAppearance(mag);
    const color = '#' + stellarColor(ci).map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
    const radius = Math.max(0.45, size * 0.075);
    elements.push(`<g fill="${color}" opacity="${(intensity * 0.78).toFixed(3)}"><circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${radius.toFixed(2)}"/>${flare > 0 ? `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${(size * 0.35).toFixed(2)}" opacity="0.06"/>` : ''}</g>`);
  }
  const name = mobile ? 'orion-mobile.svg' : 'orion-desktop.svg';
  writeFileSync(`${publicDir}${name}`, `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><title>Orion star field</title><desc>HYG v4.1 by David Nash / Astronexus; J2000 coordinates. Filtered and projected for STAR-T-RAIN. CC BY-SA 4.0. See credits.txt.</desc>${elements.join('')}</svg>\n`);
}
console.log(`Generated ${stars.length} catalog stars and two static sky views.`);
