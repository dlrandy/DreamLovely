import IButton from './Button';
export default class MacButton implements IButton {
  /**
   * paint
   */
  public paint(): void {
    console.log("paint ", this.paint);

  }
}
