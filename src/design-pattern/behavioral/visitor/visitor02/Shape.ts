import IVisitor from './Visitor';
export default interface IShape {
  move(x: number, y: number):void;
  draw():void;
  accept(v: IVisitor):void;
}
