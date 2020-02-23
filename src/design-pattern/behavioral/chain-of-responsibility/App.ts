import Button from './Button';
import Dialog from './Dialog';
import Panel from './Panel';
export default class App{
  public ok!: Button;
  public createUI(): void{
    const dialog = new Dialog('budget report');
    dialog.wikiPageUrl = 'http://...';
    const panel = new Panel('this panel does..');
    const ok = new Button('this is ok button that..');
    const cancel = new Button('this is cancel button that..');
    this.ok = ok;
    panel.add(ok);
    panel.add(cancel);
    dialog.add(panel);
  }

  /**
   * onClick
   */
  public onClick() {
    this.ok.showHelp();
  }
} ;
