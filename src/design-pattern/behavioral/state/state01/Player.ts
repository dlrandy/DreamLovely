import LockedState from '@Behavioral/state/state01/LockedState';
import State from '@Behavioral/state/state01/State';
import UserInterface from '@Behavioral/state/state01/User';

export default class AudioPlayer {
  public playing: boolean = false;
  public state: State;
  public UI: UserInterface = new UserInterface();
  constructor(
    public volume: number,
    public playlist: string[],
    public currentSong: string,


  ) {
    this.state = new LockedState(this);
    this.playlist = playlist;
    this.volume = 1;
    this.currentSong = 'caryy on';

  }
  /**
   * changeState
   */
  public changeState(state: State): void {
    this.state = state
  }

  /**
   * clickLock
   */
  public clickLock(state: State): void {
    this.state = state
  }
  /**
   * clickPlay
   */
  public clickPlay(state: State): void {
    this.state = state
  }
  /**
   * clickNext
   */
  public clickNext(state: State): void {
    this.state = state
  }
  /**
   * clickPrevious
   */
  public clickPrevious(state: State): void {
    this.state = state
  }
  /**
   * startPlayBack
   */
  public startPlayBack(state: State): void {
    this.state = state
  }
  /**
   * stopPlayBack
   */
  public stopPlayBack(state: State): void {
    this.state = state
  }
  /**
   * nextSong
   */
  public nextSong(state: State): void {
    this.state = state
  }
  /**
   * previousSong
   */
  public previousSong(state: State): void {
    this.state = state
  }
  /**
   * fastForward
   */
  public fastForward(state: State): void {
    this.state = state
  }
  /**
   * rewind
   */
  public rewind(state: State): void {
    this.state = state
  }


}

