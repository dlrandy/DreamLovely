import IComponentWithContextualHelp from "./ComponentWithContextualHelp";
import Container from "./Container";
// base class for simple component
export default abstract class Component implements IComponentWithContextualHelp {

  public tooltipText!: string;
  public container!: Container;
  public showHelp(): void {
    if (this.tooltipText != null) {
      console.log('====================================');
      console.log('showTooltip.');
      console.log('====================================');
    } else {
      this.container.showHelp();
    }
  }

}


