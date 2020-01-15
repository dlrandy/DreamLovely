import DataSourceDecorator from "./DataSourceDecorator";

export default class EncryptionDecorator extends DataSourceDecorator {
  /**
   * readData
   */
  public readData():any {
   let data:any = this.wrappee.readData();
    data = decodeURI(data);
    return data;
    // 解密数据
  }

  /**
   * writeData
   */
  public writeData(data: any) {
    // 加密数据
    this.wrappee.writeData(data);
  }
}
