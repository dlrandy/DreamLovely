import Circle from './Circle';
import CompoundGraphic from './CompoundGraphic';
import Dot from './Dot';
import IGraphic from './Graphic';
export default class ImageEditor {
  public root!: CompoundGraphic;
  /**
   * load
   */
  public load() {
    this.root = new CompoundGraphic();
    this.root.add(new Dot(1, 2));
    this.root.add(new Circle(3,4,5));
  }

  /**
   * goupSelected
   */
  public goupSelected(components: IGraphic[]) {
    const group = new CompoundGraphic();
    group.add(components);
    this.root.remove(components)
    this.root.add(group)
    this.root.draw();
  }
}
