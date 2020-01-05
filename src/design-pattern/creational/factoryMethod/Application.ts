import Dialog from './Dialog';
import WindowsDialog from './WindowsDialoga';
import WebDialog from './WebDialoga';

declare function readApplicationConfigFile(): any;

export default class Application {

  private dialog!: Dialog;

  /**
   * initialize
   */
  public initialize():void {
    const config = readApplicationConfigFile();
    let dialog:Dialog;
    // tslint:disable-next-line: triple-equals
    if (config.OS == 'windows') {
      dialog = new WindowsDialog();
    // tslint:disable-next-line: triple-equals
    } else if (config.OS == 'web') {
      dialog = new WebDialog();
    } else {
      throw new Error('Error! Unknown operating system');

    }
  }

  /**
   * main
   */
  public main():void {
    this.initialize();
    this.dialog.render();
  }

}
