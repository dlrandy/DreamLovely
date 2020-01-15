import DataSourceDecorator from "./DataSourceDecorator";

export default class CompressionDecorator extends DataSourceDecorator {
  /**
   * readData
   */
  public readData():any {
   let data:any = this.wrappee.readData();
   // 解压缩
    data = decodeURI(data);
    return data;
  }

  /**
   * writeData
   */
  public writeData(data: any) {
    // 压缩数据
    
    this.wrappee.writeData(data);
  }
}
