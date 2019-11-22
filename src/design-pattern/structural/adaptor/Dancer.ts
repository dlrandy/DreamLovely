export default class Dancer {
  constructor(public name: string) {

  }
  /**
   * toString
   */
  public toString(): string {
    return `the dancer ${this.name}`;
  }

  /**
   * dance
   */
  public dance(): string {
    return 'do a dance performance';
  }
}
