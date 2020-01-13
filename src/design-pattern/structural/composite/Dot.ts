import IGraphic from './Graphic'

export default class Dot implements IGraphic {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  public move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }
  public draw(): void {
    throw new Error("Method not implemented.");
  }
}
