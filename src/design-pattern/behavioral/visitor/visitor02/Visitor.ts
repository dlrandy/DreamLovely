import Dot from './Dot';
import Circle from './Circle';
import Rectangle from './Rectangle';
export default interface IVisitor {
  visitDot(d: Dot):void;
  visitCircle(c: Circle):void;
  visitRectangle(r: Rectangle): void;
}





