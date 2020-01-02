import IBuilder from "@Creational/builder/IBuilder";
import Manual from './Manual';

export default class CarManualBuilder implements IBuilder {
  private manual!: Manual;

  constructor(){
    this.reset();
  }

  public reset(): void {
    this.manual = new Manual();
  }
  public setSeats(): void {
    throw new Error("Method not implemented.");
  }
  public setEngine(): void {
    throw new Error("Method not implemented.");
  }
  public setTripComputer(): void {
    throw new Error("Method not implemented.");
  }
  public setGPS(): void {
    throw new Error("Method not implemented.");
  }
  /**
   * getProduct
   */
  public getProduct():Car {
    const product = this.car;
    this.reset();
    return product;
  }
}
