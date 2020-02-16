import ThirdPartyLib from './ThirtyPartLib';
import ThirdPartyClass from './ThirdPartyClass';
export default class ProxyClass implements ThirdPartyLib {

  private service:ThirdPartyClass;
  private listCache: Array<any>;
  private videoCache: Array<any>;
  public needReset: boolean;
  constructor(service: ThirdPartyLib) {
    this.service = service;
  }
  public listVideos() {
    if (this.listCache === null || this.needReset) {
      this.listCache = this.service.listVideos();
    }
    return this.listCache;
  }
  public getVideoInfo(id: number) {
    if (this.videoCache === null || this.needReset) {
      this.videoCache = this.service.listVideos();
    }
    return this.videoCache;
  }
  public downloadVideo(id: number) {
    throw new Error("Method not implemented.");
  }
}
