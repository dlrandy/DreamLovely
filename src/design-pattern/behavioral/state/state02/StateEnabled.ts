
import Context from '@Behavioral/state/state02/context';
import State from '@Behavioral/state/state02/state'

export default class StateEnabled implements State {
  constructor(public context: Context) {

  }
  public render(hover: boolean): void {
    this.context.$element.removeClass('disabled').toggleClass('hover', hover)
  }
  public click(): void {
    this.context.onclick();
  }
}
