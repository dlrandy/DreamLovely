import LockedState from '@Behavioral/state/state01/LockedState';
import PlayingState from '@Behavioral/state/state01/PlayingState';
import State from '@Behavioral/state/state01/State'
export default class ReadyState extends State{
  public clickLock(): void {
    this.player.changeState(new ReadyState(this.player))
  }
  public clickPlay(): void {
    this.player.startPlayBack(this);
    this.player.changeState(new PlayingState(this.player));
  }
  public clickNext(): void {
    this.player.nextSong(this);
  }
  public clickPrevious(): void {
    this.player.previousSong(this);
  }
}
