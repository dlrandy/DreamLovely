import Container from './Container';
// complex component override default implementation

export default class Panel extends Container{
  // protected modalHelpText: string | undefined;
  constructor(protected modalHelpText:string | undefined) {
    super();
  }

  /**
   * showHelp
   */
  public showHelp() {
    if (this.modalHelpText !== undefined) {
      console.log('====================================');
      console.log('show mpdalwindow with help text');
      console.log('====================================');
    } else {
      super.showHelp();
    }
  }

}

