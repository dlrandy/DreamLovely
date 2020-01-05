import IButton from "./Button";
import ICheckbox from "./Checkbox";
import IGUIFactory from "./GUIFactory";
import WinButton from "./WinButton";


export default class WinFactory implements IGUIFactory {
  public createButton(): IButton {
    return new WinButton();
  }

  public createCheckbox(): ICheckbox {
    return new WinCheckbox();
  }


}


