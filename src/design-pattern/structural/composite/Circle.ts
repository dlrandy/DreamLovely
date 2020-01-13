import Dot from './Dot'

export default class Circle extends Dot {

  public radius: number;
  constructor(x: number, y: number, radius: number){
    super(x, y);
    this.radius = radius;
  }
  /**
   * draw
   */
  public draw() {
    console.log('====================================');
    console.log('drawing use x, y, radius');
    console.log('====================================');
  }
}
