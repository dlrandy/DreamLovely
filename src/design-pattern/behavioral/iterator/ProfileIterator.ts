import Profile from "./Profile";

// interator interface

export default interface IProfileIterator{
  getNext():Profile;
  hasMore(): boolean;
}
