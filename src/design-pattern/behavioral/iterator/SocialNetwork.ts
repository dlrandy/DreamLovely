import IProfileIterator from './ProfileIterator';
// collection iterface

export default interface ISocialNetwork{
  createFriendsIterator(profileId:number):IProfileIterator;
  createCoworkersIterator(profileId:number):IProfileIterator;

}
