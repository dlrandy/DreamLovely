// tslint:disable: max-classes-per-file
export class VideoFile {
  constructor(public filename: string) {

  }

}
export class OggCompressionCodec {
}
export class MPEG4CompressionCodec {
}
export class CodecFactory {
  /**
   * extract
   */
  public extract(file:VideoFile) {
    console.log('file', file)
  }
}
export class BitrateReader {
  /**
   * read
   */
  public static read(filename:string, sourceCodec:VideoFile):VideoFile {
    return sourceCodec;
  }

  /**
   * convert
   */
  public static convert(buffer: VideoFile) {
return buffer;
  }
}
export class AudioMixer {
}

