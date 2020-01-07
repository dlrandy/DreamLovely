import Circle from './Circle';
import Rectangle from './Rectangle';
import Shape from './Shape';
export default class Application {
  private shapes: Shape[] = [];
  constructor() {
    const circle = new Circle();
    circle.x = 10;
    circle.y = 10;
    circle.radius = 12;

    this.shapes.push(circle);

    const anotherCircle = circle.clone();
    this.shapes.push(anotherCircle);

    const rectangle = new Rectangle();
    rectangle.width = 10;
    rectangle.height = 10;
    this.shapes.push(rectangle);


  }

  /**
   * businessLogic
   */
  public businessLogic() {
    const shapesCopy = new Array<Shape>(this.shapes.length);
    this.shapes.forEach(shape => {
      shapesCopy.push(shape.clone());
    })
  }
}
