import State from '@Behavioral/state/state02/state';
import StateDisabled from '@Behavioral/state/state02/StateDisabled';
import StateEnabled from '@Behavioral/state/state02/StateEnabled';
export default class Context {
  public $element!: JQuery;
  public state: State;
  private stateEnabled = new StateEnabled(this);
  private stateDisabled = new StateDisabled(this);

  constructor(){
    this.state = this.stateEnabled;
    this
      .$element
      .hover(
        () =>this.render(true),
        () => this.render(false)
      )
      .click(() => this.click());

      this.render(false);
  }

  public onclick():void {
    console.log('I am clicked')
  }

  private render(hover: boolean): void {
    this.state.render(hover);
  }

  private click(): void {
    this.state.click();
  }
}
