// Shared by the WebGL background and its generated, motion-free SVG fallback.
// The sky is viewed from Earth: east (increasing RA) is left, north is up.
export const SKY_VIEW = {
  raHours: 5.6,
  decDegrees: 0,
  rollDegrees: -8,
  desktopYawDegrees: -21,
  verticalFovDegrees: 56,
};

const radians = (degrees) => degrees * Math.PI / 180;

export function equatorialDirection(raHours, decDegrees) {
  const ra = radians((raHours - SKY_VIEW.raHours) * 15);
  const dec = radians(decDegrees);
  const centerDec = radians(SKY_VIEW.decDegrees);
  const x = -Math.cos(dec) * Math.sin(ra);
  const y = Math.sin(dec) * Math.cos(centerDec)
    - Math.cos(dec) * Math.sin(centerDec) * Math.cos(ra);
  const z = -(Math.sin(dec) * Math.sin(centerDec)
    + Math.cos(dec) * Math.cos(centerDec) * Math.cos(ra));
  const roll = radians(SKY_VIEW.rollDegrees);
  return [x * Math.cos(roll) - y * Math.sin(roll), x * Math.sin(roll) + y * Math.cos(roll), z];
}

export function skyYaw(mobile) {
  return mobile ? 0 : radians(SKY_VIEW.desktopYawDegrees);
}

export function orientDirection([x, y, z], mobile) {
  const yaw = skyYaw(mobile);
  return [x * Math.cos(yaw) + z * Math.sin(yaw), y, -x * Math.sin(yaw) + z * Math.cos(yaw)];
}

// B-V drives a restrained, approximate display palette; it is not photometry.
export function stellarColor(colorIndex) {
  const bv = colorIndex ?? 0.3;
  /** @type {Array<[number, [number, number, number]]>} */
  const stops = [
    [-0.3, [0.62, 0.76, 1]],
    [0.0, [0.84, 0.90, 1]],
    [0.6, [1, 0.94, 0.81]],
    [1.5, [1, 0.65, 0.40]],
    [2.0, [1, 0.52, 0.30]],
  ];
  if (bv <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) {
    const [right, b] = stops[i];
    const [left, a] = stops[i - 1];
    if (bv <= right) {
      const t = (bv - left) / (right - left);
      return a.map((value, channel) => value + (b[channel] - value) * t);
    }
  }
  return stops.at(-1)[1];
}

// Compress the magnitude range so faint catalog stars survive a web display.
export function stellarAppearance(magnitude) {
  return {
    size: 3 + 30 * Math.pow(10, -0.14 * (magnitude + 1.44)),
    intensity: Math.min(1, Math.max(0.18, Math.pow(10, -0.10 * (magnitude - 1)))),
    flare: Math.min(1, Math.max(0, (3 - magnitude) / 1.8)),
  };
}
