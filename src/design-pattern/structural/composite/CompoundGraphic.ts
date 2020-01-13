import IGraphic  from './Graphic'

export default class CompoundGraphic implements IGraphic {

  public children: Array<IGraphic|IGraphic[]> = [];
  public move(x: number, y: number): void {
    this.children.forEach(child => child.move(x, y))
  }
  public draw(): void {
    throw new Error("Method not implemented.");
  }
  /**
   * add
   */
  public add(child: IGraphic|IGraphic[]) {
    this.children.push(child)
  }

  /**
   * remove
   */
  public remove(child: IGraphic|IGraphic[]) {
    console.log('remove child')
  }
}

