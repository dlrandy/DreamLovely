import ExportVisitor from './ExportVisitor';
export default class SightSeeing {

  /**
   * accept
   */
  public accept(v: ExportVisitor) {
    v.doForCity(this);
  }
}
