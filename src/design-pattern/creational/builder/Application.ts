import CarBuilder from './CarBuilder';
import Director from './Director';
import Car from './Car';
import CarManualBuilder from './Manual';
export default class Application {
  /**
   * makeCar
   */
  public makeCar() {
    const director = new Director();
    // tslint:disable-next-line: no-unused-expression
    const builder = new CarBuilder();
    director.constructSportsCar(builder);
    const car = builder.getProduct();
    console.log("car ", car);
    const builderM = new CarManualBuilder();
    director.constructSportsCar(builderM);
    const manual = builder.getProduct();
    console.log("manual ", manual);

  }
}
