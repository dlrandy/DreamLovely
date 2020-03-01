import FacebookNetwork from './FackbookNetwork';
import Profile from './Profile';
import ISocialNetwork from './SocialNetwork';
import SocialSpammer from './SocialSpammer';
export default class Application {
  constructor(public network: ISocialNetwork, public spammer: SocialSpammer) {
    this.config();
  }
  /**
   * config
   */
  public config() {
    this.network = new FacebookNetwork();
    this.spammer = new SocialSpammer();
  }

  /**
   * sendSpamToFriends
   */
  public sendSpamToFriends(profile:Profile):boolean {
    const iterator = this.network.createFriendsIterator(profile.getProfileId());
    return this.spammer.send(iterator, 'hello iteator');
  }
  public sendSpamToCoworkers(profile:Profile):boolean {
    const iterator = this.network.createCoworkersIterator(profile.getProfileId());
    return this.spammer.send(iterator, 'hello iteator');
  }

}
