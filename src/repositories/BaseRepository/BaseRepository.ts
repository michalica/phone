
const DATA_SIZE = 19000;

export default class BaseRepository {

  private DB_PATH = "../../../db/db.json";
  private WORDS_PATH = "../../../db/20k.json";
  private readonly db: {[key: number]: string};
  private readonly words: string[];

  constructor(
    ) {
    this.db = require(this.DB_PATH);
    this.words = require(this.WORDS_PATH);
    this.words = this.words.slice(0, DATA_SIZE);
  }


  public getDb(): {[key: number]: string} {
    return this.db;
  }

  public getWords(): string[] {
    return this.words;
  }

}
