import Component from "./Component";
import IMedaitor from './Medaitor';

export default class Button extends Component {
  constructor(public medaitor:IMedaitor) {
    super(medaitor);
  }
}
