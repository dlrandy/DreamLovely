import TextReader from '@Behavioral/templateMethod/method02/TextReader'
export default abstract class AsciiTextReader extends TextReader {
  public decodeBytes(bytes: Buffer): string{
    return bytes.toString('ascii');
  }
}

