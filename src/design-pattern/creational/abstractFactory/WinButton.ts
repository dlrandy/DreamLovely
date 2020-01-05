import IButton from './Button';
export default class WinButton implements IButton {
  /**
   * paint
   */
  public paint(): void {
    console.log("paint ", this.paint);

  }
}
