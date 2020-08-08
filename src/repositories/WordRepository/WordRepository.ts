import BaseRepository from "../BaseRepository";

export default class WordRepository extends BaseRepository {
  public getAll(): string[]
  {
    return this.getWords();
  }
}
