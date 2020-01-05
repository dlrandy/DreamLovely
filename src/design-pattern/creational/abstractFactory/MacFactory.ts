import IButton from "./Button";
import ICheckbox from "./Checkbox";
import IGUIFactory from "./GUIFactory";
import MacButton from "./MacButton";
import MacCheckbox from './MacCheckbox';

export default class MacFactory implements IGUIFactory {
  public createButton(): IButton {
    return new MacButton();
  }

  public createCheckbox(): ICheckbox {
    return new MacCheckbox();
  }


}


