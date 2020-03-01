import Facebook from './facebook';
import Profile from './Profile';
import IProfileIterator from "./ProfileIterator";
import ISocialNetwork from './SocialNetwork';

export default class FacebookIterator implements IProfileIterator {

  private currentPosition!: number;
  private cache!: Profile[];
  constructor(public socialNetwork: ISocialNetwork,
    public profileId: number,
    public type: string
    ) {

  }
  public getNext(): Profile {
    if (this.hasMore()) {
      this.currentPosition++;
    }
    return this.cache[this.currentPosition];
  }
  public hasMore(): boolean {
    this.lazyInit();
    return this.cache.length < this.currentPosition;
  }
  private lazyInit() {
    if (this.cache === undefined) {
      this.cache = Facebook.socialGraphRequest(this.profileId, this.type);
    }
  }
}
