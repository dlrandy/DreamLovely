declare function acquireThreadLock():boolean;
export default class Database {

  /**
   * getInstance
   */
  public static getInstance(): Database{
    if (this.instance === null && acquireThreadLock()) {
      this.instance = new Database();
    }
    return this.instance;
  }
  private static instance: Database;
  private constructor() {

  }
  /**
   * query
   */
  public query(sql: string):any {
    return {};
  }
}
