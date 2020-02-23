import Command from "./Command";

export default class PasteCommand extends Command {
  public execute(): boolean {
    this.saveBackup();
    this.editor.replaceSelection(app.clipboard);
    return true;
  }

}
