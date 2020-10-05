import {Point} from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor();
    constructor(points: Point[], color: string, filled: boolean);
    constructor(points?: Point[], color: string = 'green', filled: boolean = true) {
        this.color = color;
        this.filled = filled;

        if (points.length > 2) {
            this.points = points;
        } else {
            throw new Error('Its just a line');
        }
    };

    abstract getType(): string;

    toString(): string {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points:${this.points
            .map(
                (i) => ' ' + i.toString()
            )}.`;
    }

    getPerimeter(): number {
        return this.points.reduce(
            (accumulator, currentValue, index, array) => {
                const nextPointIdx = index + 1 < array.length ? index + 1 : 0;
                return accumulator + currentValue.distance(array[nextPointIdx]);
            }, 0);
    }
}
