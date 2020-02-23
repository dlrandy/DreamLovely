import Component from "./Component";

// contain both simple components and other containers as chilsren
// chain relatationship are established here
export default abstract class Container extends Component {
  protected children:Component[] = [];

  /**
   * add
   */
  public add(child:Component):boolean {
    try {
      this.children.push(child);
      child.container = this;
      return true;
    } catch (error) {
      return false;
    }
  }
}
