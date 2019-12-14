import PlayingState from '@Behavioral/state/state01/PlayingState';
import ReadyState from '@Behavioral/state/state01/ReadyState';
import State from '@Behavioral/state/state01/State';
export default class LockedState extends State{
  public clickLock(): void {
    if (this.player.playing) {
      this.player.changeState(new PlayingState(this.player))
    } else {
      this.player.changeState(new ReadyState(this.player))
    }
  }
  public clickPlay(): void {
    throw new Error("Method not implemented.");
  }
  public clickNext(): void {
    throw new Error("Method not implemented.");
  }
  public clickPrevious(): void {
    throw new Error("Method not implemented.");
  }
}
