import AsciiTextReader from '@Behavioral/templateMethod/method02/TextReader';
import fs from 'fs';
// @ts-ignore
export default class FileAsciiTextReader extends AsciiTextReader {
  constructor(public path: string) {
    super();
  }

  public readAllBytes(): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      fs.readFile(this.path, (err, bytes) => {
        if (err) {
          reject(err);
        } else {
          resolve(bytes);
        }
      })
    })
  }

}
