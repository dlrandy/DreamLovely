import ThirdPartyClass from './ThirdPartyClass';
import ProxyClass from './ProxyClass';
import UIManager from './UI';
class App {
  /**
   * init
   */
  public init() {
    const service = new ThirdPartyClass();
    const serviceProxy = new ProxyClass(service);
    const manager = new UIManager(serviceProxy);
    manager.reactOnUserInput();
  }
}
