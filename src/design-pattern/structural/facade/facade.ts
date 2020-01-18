import { VideoFile, CodecFactory, MPEG4CompressionCodec, OggCompressionCodec, BitrateReader } from './framework/index';
export default class VideoConverter {
  /**
   * convert
   */
  public convert(filename: string, format: string):VideoFile {
    const file = new VideoFile(filename);
    const sourceCodec = new CodecFactory().extract(file);
    let destinationCodec;
    if (format === 'mp4') {
      destinationCodec = new MPEG4CompressionCodec();
    } else {
      destinationCodec = new OggCompressionCodec();
    }
    const buffer = BitrateReader.read(filename, file);
    const result = BitrateReader.convert(buffer);
    return result;
  }
}
