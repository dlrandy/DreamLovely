import Shape from './Shape';
export default class Circle extends Shape {
  public radius: number;
  constructor(source?:Circle) {
    super(source);
    this.radius = source ? source.radius : 0;
  }
  public clone(): Shape {
    return new Circle(this);
  }
}
