import {Shape} from './Shape';
import {Point} from "./Point";

export class Triangle extends Shape {
    constructor();
    constructor(points: Point[], color: string, filled: boolean);
    constructor(points?: Point[], color?: string, filled?: boolean) {
        super(points, color, filled);
        this.color = color;
        this.filled = filled;
        this.points = points;
    }

    toString(): string {
        return `Triangle[${this.points
            .map(
                (i, idx) => 'v' + idx + '=' + i.toString()
            )}]`;
    }

    getType(): string {
        const EQUALATERAL_TRIANGLE: string = 'equilateral triangle';
        const ISOSCELES_TRIANGLE: string = 'isosceles triangle';
        const SCALENE_TRIANGLE: string = 'scalene triangle';
        let sideLength: number;
        const equalSides: number = this.points.reduce(
            (accumulator, currentValue, index, array) => {
                const nextPointIdx: number = index + 1 < array.length ? index + 1 : 0;
                let calcDistance = Math.round(currentValue.distance(array[nextPointIdx]) * 100) / 100;
                if (calcDistance === sideLength) {
                    accumulator++;
                } else {
                    sideLength = calcDistance;
                }
                return accumulator;
            }, 1);

        switch (equalSides) {
            case 3:
                return EQUALATERAL_TRIANGLE;
            case 2:
                return ISOSCELES_TRIANGLE;
            default:
                return SCALENE_TRIANGLE;
        }
    }
}
