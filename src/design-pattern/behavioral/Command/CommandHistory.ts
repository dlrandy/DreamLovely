import Command from "./Command";
import Application from './Application';

export default class CommandHistory {
  private history!: Command[];
  /**
   * push
   */
  public push(c: Command):boolean {
    return true;
  }
  public pop(): void/*Command*/ {
    // return new Command('' as Application, 'this.editor', 'this.backup');
  }
}
