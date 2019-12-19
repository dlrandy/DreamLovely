import ExportVisitor from './ExportVisitor';
export default class City {

  /**
   * accept
   */
  public accept(v: ExportVisitor) {
    v.doForCity(this);
  }
}
