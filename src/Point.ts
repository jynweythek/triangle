export class Point {
    private readonly x: number;
    private readonly y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    toString(): string {
        return `(${(this.x)}, ${(this.y)})`;
    }

    distance(x?: number | Point, y?: number | Point): number {
        if (arguments.length === 1) {
            return Math.sqrt(((this.x - +arguments[0].x) ** 2) + ((this.y - +arguments[0].y) ** 2));
        }

        if (x && y) {
            return Math.sqrt(((this.x - +x) ** 2) + ((this.y - +y) ** 2));
        } else {
            return Math.sqrt((this.x ** 2) + (this.y ** 2));
        }
    }
}
