import Component from "./Component";
import IMedaitor from './Medaitor';


export default class Checkbox extends Component {
  public checked: boolean = false;
  constructor(public medaitor:IMedaitor) {
    super(medaitor);
  }

  /**
   * check
   */
  public check() {
    this.medaitor.notify(this, 'check');
  }
}
