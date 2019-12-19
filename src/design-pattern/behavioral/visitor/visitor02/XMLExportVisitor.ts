import IVisitor from "./Visitor";

export default class XMLExportVisitor implements IVisitor {
  public visitDot(d: import("./Dot").default): void {
    throw new Error("Method not implemented.");
  }
  public visitCircle(c: import("./Circle").default): void {
    throw new Error("Method not implemented.");
  }
  public visitRectangle(r: import("./Rectangle").default): void {
    throw new Error("Method not implemented.");
  }

}



