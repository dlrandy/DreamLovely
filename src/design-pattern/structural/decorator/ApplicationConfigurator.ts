import CompressionDecorator from './CompressionDataSource';
import IDataSource from './DataSource';
import EncryptionDecorator from './EncryptionDecorator';
import FileDataSource from './FileDataSource';
import SalaryManager from './SalaryManager';
export default class ApplicationConfigrator {
  /**
   * main
   */
  public main() {
    let source:IDataSource = new FileDataSource('');
    source = new EncryptionDecorator(source);
    source = new CompressionDecorator(source);
    const logger = new SalaryManager(source);
    const salary = logger.load();
 console.log("salary ", salary);
  }
}
