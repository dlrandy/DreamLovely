import Player from '@Behavioral/state/state01/Player'
export default abstract class State {
  constructor(protected player: Player) {}

  public abstract clickLock():void;
  public abstract clickPlay():void;
  public abstract clickNext(isDBClick?:boolean):void;
  public abstract clickPrevious(isDBClick?:boolean):void;

}
