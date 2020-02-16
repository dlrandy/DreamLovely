import Tree from "./Tree";
import TreeType from './TreeType';

export default class TreeFactory {
  public static treeTypes : TreeType[];
  public static getTreeType(name: string, color: string, texture: string):TreeType{
    let type:TreeType|undefined = this.treeTypes.find((t) => (
      t.color === color && t.name === name &&
     t.texture === texture));
     if (type === undefined) {
       type = new TreeType(name, color, texture);
       this.treeTypes.push(type);
     }
     return type;
  }
}
