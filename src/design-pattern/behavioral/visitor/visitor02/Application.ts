import IShape from './Shape';
import XMLExportVisitor from './XMLExportVisitor';
export default class Application {
  constructor(public allShapes: IShape[]) {
  }
/**
 * export
 */
public export(): void{
  const exportVisitor = new XMLExportVisitor()
  this.allShapes.forEach(shape => shape.accept(exportVisitor))
}
}
