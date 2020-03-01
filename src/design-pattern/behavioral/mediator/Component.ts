import IMedaitor from "./Medaitor";

export default class Component {
  constructor(public dialog:IMedaitor) {

  }

  /**
   * click
   */
  public click() {
    this.dialog.notify(this, 'click');
  }

  /**
   * keypress
   */
  public keypress() {
    this.dialog.notify(this, 'keypress');
  }

}
