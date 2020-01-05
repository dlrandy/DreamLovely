import IButton from './Button';
import Dialog from "./Dialog";
import WindowsButton from './WindowsButton';

export default class WindowsDialog extends Dialog {
  public createButton(): IButton {
    return new WindowsButton();
  }
}
