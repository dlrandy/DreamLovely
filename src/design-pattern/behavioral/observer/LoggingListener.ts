import EventListener from './EventListener'
export default class LoggingListener implements EventListener {
  constructor(private log:File, private message: string) {


  }

  public update(filename: string): void {
    console.log(`log write(repalce('%s', ${filename}, message))`);
  }
}
