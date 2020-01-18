import VideoConverter from './facade';
export default class Application {
  /**
   * main
   */
  public main() {
    const converter = new VideoConverter();
    const mp4 = converter.convert('youtobe.ogg', 'mp4');
  }
}
