import ExportVisitor from './ExportVisitor';
export default class Industry {
/**
 * accept
 */
public accept(v: ExportVisitor) {
  v.doForIndustry(this);
}
}
