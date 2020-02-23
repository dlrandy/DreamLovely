import Container from "./Container";

export default class Dialog extends Container {
  constructor(public wikiPageUrl: string) {
    super();
  }
  /**
   * showHelp
   */
  public showHelp() :boolean{
    if (this.wikiPageUrl !== undefined) {
      console.log('====================================');
      console.log('show wikihelp page');
      console.log('====================================');
    } else {
      super.showHelp();
    }
  }
};

