export default abstract class Shape {

  public x: number;
  public y: number;
  public color: string;
  constructor(shape?: Shape){
    this.x = shape ? shape.x : 0;
    this.y = shape ? shape.y : 0;
    this.color = shape ? shape.color : 'red';
  }


  public abstract clone():Shape;
}
