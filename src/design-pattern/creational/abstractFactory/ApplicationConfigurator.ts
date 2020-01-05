import IGUIFactory from './GUIFactory';
import MacFactory from './MacFactory';
import WinFactory from './WinFactory';
import Application from './Application';


declare function readApplicationConfigFile():any;

export default class ApplicationConfigurator {
  /**
   * main
   */
  public main():void {
    const config = readApplicationConfigFile();
    let factory: IGUIFactory;
    if (config.OS === 'windows') {
      factory = new WinFactory();
    } else if(config.OS === 'mac') {
      factory = new MacFactory();
    } else {
      throw new Error("Unknown system");
    }

    const app = new Application(factory);
  }
}
