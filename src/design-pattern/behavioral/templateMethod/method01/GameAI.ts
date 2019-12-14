export default abstract class GameAI {
  /**
   * turn
   */
  public turn() {
    this.collectResources();
    this.buildStructures();
    this.buildUnits()
    this.attack();
  }

  /**
   * collectResources
   */
  public collectResources() {
    this.buildStructures().forEach(b => b.collect())
  }

  public abstract buildStructures():any[];
  public abstract buildUnits(): any[];
  public attack(enemy: any):void{
    if (enemy == null) {
      this.sendScouts(0)
    } else {
      this.sendWarriors(1)
    }
  }
  public abstract sendScouts(position:any): any;
  public abstract sendWarriors(position: any): any;
}
