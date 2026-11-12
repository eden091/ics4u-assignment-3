import { dis, p, q } from "@ics4u-assignment-02/constants";

export const Calculate = (a: number, b: number, c: number, d: number) => {
    if (dis(a, b, c, d) < 0) {
        const theta = (1 / 3) * Math.acos(-q / (2 * Math.sqrt((-p / 3) ** 3)));

        const y1 = 2 * Math.sqrt(-p / 3) * Math.cos(theta);
        const y2 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI) / 3);
        const y3 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI) / 3);

        const x1 = y1 - b / (3 * a);
        const x2 = y2 - b / (3 * a);
        const x3 = y3 - b / (3 * a);
    }
}