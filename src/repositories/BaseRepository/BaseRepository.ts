
export default class BaseRepository {

  private DB_PATH = "../../../db/db.json";
  private readonly db: {[key: number]: string};

  constructor(
    ) {
    this.db = require(this.DB_PATH);
  }


  public getDb(): {[key: number]: string} {
    return this.db;
  }

}
