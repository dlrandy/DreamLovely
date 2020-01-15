import IDataSource from "./DataSource";

export default class FileDataSource implements IDataSource {
  public filename: string;
  constructor(filename: string) {
    this.filename = filename;
  }
  public writeData(): void {
    throw new Error("Method not implemented.");
  }
  public readData(): void {
    throw new Error("Method not implemented.");
  }
}


