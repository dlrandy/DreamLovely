import ISocialNetwork from "./SocialNetwork";
import IProfileIterator from './ProfileIterator';
import FacebookIterator from './FacebookIterator';

// concrete collection

export default class FacebookNetwork implements ISocialNetwork {
  public createFriendsIterator(profileId: number): IProfileIterator {
    return new FacebookIterator(this, profileId, 'friends');
  }
  public createCoworkersIterator(profileId: number): IProfileIterator {
    return new FacebookIterator(this, profileId, 'coworkers');
  }

}
