import Editor from './Editor';
import EmailAlertsListener from './EmailAlertsListener';
import LoggingListener from './LoggingListener';
export default class Application {
  public editor!: Editor;
  /**
   * config
   */
  public config() {
    this.editor = new Editor();
    const logger = new LoggingListener(new File(['path/to/log.text'], 'log'), 'someone opend the file');
    this.editor.events.subscribe('open', logger);

    const enailsAlerts = new EmailAlertsListener('admin@we.com','someone changed the file');
    this.editor.events.subscribe('save', enailsAlerts);

  }
}
