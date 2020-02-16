import ThirdPartyLib from "./ThirtyPartLib";

export default class UIManager {
  constructor(protected service: ThirdPartyLib) {

  }
  /**
   * renderVideoPage
   */
  public renderVideoPage(id: number): any {
    const info = this.service.getVideoInfo(id);
  }

  /**
   * renderListPage
   */
  public renderListPage() {
    const list = this.service.listVideos();
  }

  /**
   * reactOnUserInput
   */
  public reactOnUserInput() {
    this.renderListPage();
    this.renderVideoPage(1);
  }

}
