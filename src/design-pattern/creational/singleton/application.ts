import Database from './database'
class App {
  /**
   * main
   */
  public main():void {
    const db = Database.getInstance();
    db.query('');
    
  }
}
