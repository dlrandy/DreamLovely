import Editor from './Editor';
// memento class
export default class Snapshot {
  constructor(
    private editor:Editor,
    private text: string,
    private curX: number,
    private curY: number,
    private selectionWidth: number,
  ){}

  /**
   * restore
   */
  public restore() {
    this.editor.setText(this.text);
    this.editor.setCurcor(this.curX, this.curY);
    this.editor.setSelectionWidth(this.selectionWidth);
  }
}
