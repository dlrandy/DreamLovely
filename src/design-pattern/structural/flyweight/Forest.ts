import Tree from './Tree';
import TreeFactory from './TreeFactory';
import TreeType from './TreeType';
export class Forest {
  public trees!:Tree[];
  /**
   * plantTree
   */
  public plantTree(x:number, y:number, name:string, color:string, texture:string):Tree {
    const type:TreeType = TreeFactory.getTreeType(name, color, texture);
    const tree: Tree = new Tree(x, y, type);
    this.trees.push(tree);
    return tree;
  }
  /**
   * draw
   */
  public draw(canvas: HTMLCanvasElement) {
    this.trees.forEach(tree=>tree.draw(canvas));
  }
}
