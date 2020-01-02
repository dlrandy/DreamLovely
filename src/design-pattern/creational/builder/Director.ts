import IBuilder from '@Creational/builder/IBuilder';
export default class Director {

  private builder!: IBuilder;

  /**
   * setBuilder
   */
  public setBuilder(builder: IBuilder) {
    this.builder = builder;
  }

  /**
   * constructSportsCar
   */
  public constructSportsCar(builder:IBuilder) {
    builder.reset();
    builder.setSeats(/*2*/);
    builder.setEngine(/*new SportEngine*/);
    builder.setTripComputer(/*true */)
    builder.setGPS();
  }

  /**
   * constrcutSUV
   */
  public constrcutSUV(builder:IBuilder) {
    
  }

}
