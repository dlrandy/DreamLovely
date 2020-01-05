import IButton from './Button';
export default class WindowsButton implements IButton {
  public render(): void {
    throw new Error("Method not implemented.");
  }
  public onClick(closeDialog: () => void): void {
    throw new Error("Method not implemented.");
  }
}
