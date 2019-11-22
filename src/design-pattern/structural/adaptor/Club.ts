export default class Club {
  constructor(public name: string) {

  }

  /**
   * toString
   */
  public toString(): string {
    return `the club ${this.name}`;
  }

  /**
   * organize_event
   */
  public organize_event():string {
    return 'hires an artist to perform for the people';
  }
}
