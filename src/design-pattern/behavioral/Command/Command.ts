import Application from './Application';
import Editor from './Editor';
export default abstract class Command {

  constructor(protected app: Application,
    protected editor: Editor,
    protected backup: string,) {

  }
  /**
   * saveBackup
   */
  public saveBackup() {
    this.backup = this.editor.text;
  }

  /**
   * undo
   */
  public undo() {
    this.editor.text = this.backup;
  }

  public abstract execute():boolean;
}
