import IDevice from './Device'
export default  class TV implements IDevice {
  public isEnabled(): boolean {
    throw new Error("Method not implemented.");
  }
  public enable(): void {
    throw new Error("Method not implemented.");
  }
  public disEnable(): void {
    throw new Error("Method not implemented.");
  }
  public getVolume(): number {
    throw new Error("Method not implemented.");
  }
  public setVolume(): void {
    throw new Error("Method not implemented.");
  }
  public getChannel(): number {
    throw new Error("Method not implemented.");
  }
  public setChannel(): void {
    throw new Error("Method not implemented.");
  }
}
