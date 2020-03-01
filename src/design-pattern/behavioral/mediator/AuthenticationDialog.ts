import Component from './Component';
import IMediator from "./Medaitor";
import Checkbox from './Checkbox';
import Textbox from './Textbox';
import Button from './Button';

export default class AuthrnticationDialog implements IMediator {
  constructor(private title: string,
    private loginOrRegisterCheckbox: Checkbox,
    private loginUsername:Textbox,
    private loginPassword:Textbox,
    private registerUsername:Textbox,
    private registerPassword:Textbox,
    private registerEmail:Textbox,
    private okButton:Button,
    private cancelButton:Button,
    private found: boolean = false,
    ) {

  }
  public notify(sender: Component, event: string): void {
    if (sender === this.loginOrRegisterCheckbox && event === 'checkbox') {
      this.title = 'login';
      // show login dialog and hide register component
    } else {
      this.title = 'registor';
    }
    if (sender === this.okButton && event === 'click') {
      if (this.loginOrRegisterCheckbox.checked) {
        if (!this.found) {
          // 没找到用户
        }
      } else {
        // 创建用户 并登陆
      }
    }


  }
}
