export default class Musician {
  constructor(public name: string) {}

  public toString():string{
    return `the musician ${this.name}`;
  }

  public play():string {
    return 'play music';
  }

}
