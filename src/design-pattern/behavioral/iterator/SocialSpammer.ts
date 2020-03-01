import IProfileIterator from './ProfileIterator';
// client class

export default class SocialSpammer {
  /**
   * send
   */
  public send(iterator:IProfileIterator, message: string):boolean {
    try {
      while (iterator.hasMore()) {
        const profile = iterator.getNext();
 console.log("System.sendEmail(profile.getEmail(), message); ")
      }
      return true;
    } catch (error) {
 console.log("error ", error);
      return false;
    }
  }
}
