import Shape from './Shape';
export default class Rectangle extends Shape {
  public width: number;
  public height: number;
  constructor(source?:Rectangle) {
    super(source);
    this.width = source ? source.width : 0;
    this.height = source ? source.height : 0;
  }
  public clone(): Shape {
    return new Rectangle(this);
  }
}
