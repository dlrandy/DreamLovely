import Command from "./Command";

export default class UndoCommand extends Command {
  public execute(): boolean {
    this.app.undo();
    return false;
  }
}
