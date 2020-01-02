import RemoteControl from "./RemoteControl";

export default  class AdvancedRemoteControl extends RemoteControl {
  /**
   * mute
   */
  public mute() {
  this.device.setVolume(0);
  }
}
