import Component from './Component';
// primitive components with default help implementation
export default class Button extends Component{
constructor(public tooltipText: string) {
  super();
}
}
