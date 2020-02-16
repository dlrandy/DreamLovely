export default interface ThirdPartyLib {
  listVideos():any;
  getVideoInfo(id: number):any;
  downloadVideo(id: number):any;
}
