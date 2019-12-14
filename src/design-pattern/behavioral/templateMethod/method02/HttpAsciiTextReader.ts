import AsciiTextReader from '@Behavioral/templateMethod/method02/TextReader';
// @ts-ignore
import request from 'request';
// @ts-ignore
export default class HttpAsciiTextReader extends AsciiTextReader {
  constructor(public url: string) {
    super();
  }

  public readAllBytes(): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      request(this.url, (err: any, bytes: Buffer, body: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(bytes);
        }
      })
    })
  }

}
