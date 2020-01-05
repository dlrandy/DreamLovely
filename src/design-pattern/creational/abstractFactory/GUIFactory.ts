import IButton from "./Button";
import ICheckbox from "./Checkbox";

export default interface IGUIFactory{
  createButton():IButton;
  createCheckbox():ICheckbox;
}
