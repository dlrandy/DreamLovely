import Editor from './Editor';
import CommandHistory from './CommandHistory';
import Command from './Command';
import CopyCommand from './CopyCommand';



export default class Application {
  public clipboard:string = '';
  public editors:Editor[] = [];
  public activeEditor:Editor = new Editor('');
  public history:CommandHistory = new CommandHistory();


  /**
   * createUI
   */
  public createUI() {
    const copy = () => {
      this.executeCommand(
        new CopyCommand(this, this.activeEditor, '')
      );
    };

    const copyButton = new HTMLButtonElement();
    // copyButton.setCommand(copy);
    // onCopy('copy', CopyCommand)

  }

  /**
   * executeCommand
   */
  public executeCommand(command: Command) {
    if(command.execute()){
      this.history.push(command);
    }
  }

  /**
   * undo
   */
  public undo() {
    const command = this.history.pop();
    if (command !== null) {
      // command.undo();
    }
  }
}
