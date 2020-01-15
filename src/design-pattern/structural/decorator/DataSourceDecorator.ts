import IDataSource from "./DataSource";

export default class DataSourceDecorator implements IDataSource {
  protected wrappee:IDataSource;
  constructor(source:IDataSource) {
    this.wrappee = source;
  }
  public writeData(data: any): void {
    this.wrappee.writeData(data);
    throw new Error("Method not implemented.");
  }
  public readData(): any {
    this.wrappee.readData();
    throw new Error("Method not implemented.");
  }
}
