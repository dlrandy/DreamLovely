import Command from "./Command";

export default class CurCommand extends Command {
  /**
   * execute
   */
  public execute() {
    this.saveBackup();
    this.app.clipboard = this.editor.getSelection();
    this.editor.deleteSelection();
    return true;
  }
}
