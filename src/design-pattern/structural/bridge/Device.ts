export default interface IDevice {
  isEnabled():boolean;
  enable():void;
  disEnable():void;
  getVolume():number;
  setVolume(volume: number):void;
  getChannel():number;
  setChannel(channel: number):void;
};
