import Editor from './Editor';
import Snapshot from './Snapshot';
// caretaker
export default class Command {
  private backup!: Snapshot;

  constructor(private editor:Editor) {

  }
  /**
   * makeBackup
   */
  public makeBackup() {
    this.backup = this.editor.createSnapshot();
  }

  /**
   * undo
   */
  public undo() {
    if (this.backup !== null) {
      this.backup.restore();
    }
  }
}
