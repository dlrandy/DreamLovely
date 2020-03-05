// concrete publisher

import EventManager from './EventManager';

export default class Editor {
  public events: EventManager;
  private file!:File;
  constructor() {
    this.events = new EventManager([]);
  }

  /**
   * openFile
   */
  public openFile(path: string):void {
    this.file = new File([new ArrayBuffer(2)], 'test');
    this.events.notify('open', this.file.name);
  }

  /**
   * saveFile
   */
  public saveFile() {
    console.log('this.file.write');
    this.events.notify('save', this.file.name);
  }
}
