import IBuilder from "@Creational/builder/IBuilder";
import Car from './Car';

export default class CarBuilder implements IBuilder {
  private car!: Car;

  constructor(){
    this.reset();
  }

  public reset(): void {
    this.car = new Car();
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
