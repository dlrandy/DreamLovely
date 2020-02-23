import Command from "./Command";

export default class CopyCommand extends Command {
  /**
   * execute
   */
  public execute():boolean {
    this.app.clipboard = this.editor.getSelection();
    return false;
  }
}
