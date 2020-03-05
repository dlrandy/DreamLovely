// base publisher
import EventListener from './EventListener'


export default class EventManager {
  constructor(private listeners: EventListener[]) {

  }
  /**
   * subscribe
   */
  public subscribe(eventType: string, listener:EventListener):void {
    this.listeners.push(listener);
  }
  /**
   * unsubscribe
   */
  public unsubscribe(eventType: string, listener:EventListener):void {
    this.listeners.splice(this.listeners.findIndex((x)=> (x ===listener)), 1);
  }

  /**
   * notify
   */
  public notify(eventType:string, data:string):void {
    this.listeners.forEach(l => l.update(data));
  }
}
