export default class TreeType {
  constructor(public name: string, public color: string, public texture: string) {

  }

  /**
   * draw
   */
  public draw(canvas:HTMLCanvasElement, x: number, y: number) {
    console.log(canvas);
  }
}
