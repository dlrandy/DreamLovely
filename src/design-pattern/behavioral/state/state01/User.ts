class Button {
  public onClick(callback: () => void){
    callback();
  }
}

// tslint:disable-next-line: max-classes-per-file
export default class UserInterface {
  public lockButton: Button = new Button();
  public playButton: Button = new Button();
  public nextButton: Button = new Button();
  public prevButton: Button = new Button();

}
