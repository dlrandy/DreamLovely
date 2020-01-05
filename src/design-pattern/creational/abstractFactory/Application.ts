import IButton from "./Button";
import IGUIFactory from './GUIFactory';

export default class Application {
  private button!:IButton;
  constructor(public factory: IGUIFactory){

  }
  /**
   * createUI
   */
  public createUI():void {
    this.button = this.factory.createButton();
  }
  /**
   * paint
   */
  public paint():void {
    this.button.paint();
  }
}
