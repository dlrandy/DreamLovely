import IShape from "./Shape";
import IVisitor from './Visitor';

export default class Circle implements IShape {

  public move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  public draw(): void {
    throw new Error("Method not implemented.");
  }
  public accept(v: IVisitor): void {
    v.visitCircle(this);
  }
}
