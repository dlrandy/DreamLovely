import Snapshot from './Snapshot';
// Originator
export default class Editor {
  constructor(private text:string,
    private curX:number,
    private curY:number,
    private selectionWidth:number,
    ) {

  }

  /**
   * setText
   */
  public setText(text: string) {
    this.text = text;
  }

  /**
   * setCurcor
   */
  public setCurcor(x, y) {
    this.curX = x;
    this.curY = y;
  }

  /**
   * setSelectionWidth
   */
  public setSelectionWidth(width: number) {
    this.selectionWidth = width;
  }

  /**
   * createSnapshot
   */
  public createSnapshot():Snapshot {
    return new Snapshot(this, this.text, this.curX, this.curY, this.selectionWidth);
  }




}
