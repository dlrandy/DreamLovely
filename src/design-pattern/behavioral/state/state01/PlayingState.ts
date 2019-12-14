import LockedState from '@Behavioral/state/state01/LockedState';
import ReadyState from '@Behavioral/state/state01/ReadyState';
import State from '@Behavioral/state/state01/State'
export default class PlayingState extends State{
  public clickLock(): void {
    this.player.changeState(new LockedState(this.player))
  }
  public clickPlay(): void {
    this.player.stopPlayBack(this);
    this.player.changeState(new ReadyState(this.player));
  }
  public clickNext(isDBClick: boolean): void {
    if (isDBClick) {
      this.player.nextSong(this);
    } else {
      this.player.fastForward(this);
    }
  }
  public clickPrevious(isDBClick: boolean): void {
    if (isDBClick) {
      this.player.previousSong(this);
    } else {
      this.player.rewind(this);
    }
  }
}
