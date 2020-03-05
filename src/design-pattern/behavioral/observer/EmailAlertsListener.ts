import EventListener from './EventListener'
export default class EmailAlertsListener implements EventListener {
  constructor(private email:string, private message: string) {


  }

  public update(filename: string): void {
    console.log(`email send(repalce('%s', ${filename}, message))`);
  }
}
