export const EPS = 1e-10;

export const p = (a: number, b: number, c: number) => {
  return (3 * a * c - b * b) / (3 * a * a);
};

export const q = (a: number, b: number, c: number, d: number) => {
  return (27 * a * a * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);
};

export const dis = (a: number, b: number, c: number, d: number) => {
  const pVal = p(a, b, c);
  const qVal = q(a, b, c, d);
  const dVal = (qVal / 2) ** 2 + (pVal / 3) ** 3;

  return Math.abs(dVal) < EPS ? 0 : dVal;
};
