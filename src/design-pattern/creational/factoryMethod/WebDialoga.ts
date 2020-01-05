import IButton from './Button';
import Dialog from "./Dialog";
import WebButton from './WebButton';

export default class WebDialog extends Dialog {
  public createButton(): IButton {
    return new WebButton();
  }
}
