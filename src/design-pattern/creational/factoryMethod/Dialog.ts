import IButton from './Button';

declare function closeDialog():boolean;

export default abstract class Dialog {

  public abstract createButton(): IButton;
  /**
   * render
   */
  public render() {
    const okButton = this.createButton();
    okButton.onClick(closeDialog);
    okButton.render();
  }
}
