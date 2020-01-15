import IDataSource from './DataSource';
export default class SalaryManager {
  public source: IDataSource;
  constructor(source: IDataSource) {
    this.source = source;
  }
  /**
   * load
   */
  public load() {
    return this.source.readData();
  }

  /**
   * save
   */
  public save() {
    this.source.writeData('');
  }
}
