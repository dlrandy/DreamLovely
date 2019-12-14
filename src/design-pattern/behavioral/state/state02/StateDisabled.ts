
import Context from '@Behavioral/state/state02/context';
import State from '@Behavioral/state/state02/state'

export default class StateDisabled implements State {
  constructor(public context: Context) {

  }

  public render(hover: boolean): void {
    this.context.$element.addClass('disabled').removeClass('hover');
  }

  public click(): void {
    // do nothings
  }
}
