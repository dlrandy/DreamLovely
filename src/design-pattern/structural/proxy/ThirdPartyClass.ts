import ThirdPartyLib from "./ThirtyPartLib";

export default class ThirdPartyClass implements ThirdPartyLib {
  public listVideos():Array<any> {
    throw new Error("Method not implemented.");
  }
  public getVideoInfo(id: number):any {
    throw new Error("Method not implemented.");
  }
  public downloadVideo(id: number):any {
    throw new Error("Method not implemented.");
  }
}

