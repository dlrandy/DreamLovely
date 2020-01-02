import IDevice from "./Device";

export default class RemoteControl {
  constructor(protected device: IDevice) {

  }
  public togglePower = () => {
    if (this.device.isEnabled()) {
      this.device.disEnable();
    } else {
      this.device.enable();
    }
  }
  /**
   * volumeDown
   */
  public volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  /**
   * volumeUp
   */
  public volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  /**
   * channelDown
   */
  public channelDown() {
    this.device.setChannel(this.device.getVolume() - 10);
  }

  /**
   * channelup
   */
  public channelup() {
    this.device.setChannel(this.device.getVolume() + 10);
  }

}
