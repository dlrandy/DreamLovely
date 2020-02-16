import TreeType from './TreeType';
export default class Tree {
  constructor(public x: number, public y:number,
    public type: TreeType) {

  }
  /**
   * draw
   */
  public draw(canvas:HTMLCanvasElement) {
    this.type.draw(canvas, this.x, this.y)
  }
}
