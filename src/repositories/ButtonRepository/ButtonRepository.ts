import Button from "../../models/Button/Button";
import BaseRepository from "../BaseRepository";

export default class ButtonRepository extends BaseRepository {
  public getButtonWithId(id: number): Button | null {
    const db: {[key: number]: string} = this.getDb();
    const content = db[id];

    if (!content) {
      return null;
    }

    return new Button(id, content);
  }
}
