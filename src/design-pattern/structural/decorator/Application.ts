import FileDataSource from './FileDataSource';
import CompressionDecorator from './CompressionDataSource';
import IDataSource from './DataSource';
import EncryptionDecorator from './EncryptionDecorator';
export default class Application {
  /**
   * main
   */
  public main() {
    let source:IDataSource = new FileDataSource('some.text');
    source.writeData('')

    source = new CompressionDecorator(source);
    source.writeData('');

    source = new EncryptionDecorator(source);
    source.writeData('');
  }
}
