import Component from "./Component";
import IMedaitor from './Medaitor';

export default class Textbox extends Component {
  constructor(public medaitor:IMedaitor) {
    super(medaitor);
  }
}
