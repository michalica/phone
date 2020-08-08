import BaseRepository from "./BaseRepository";

describe('smoke test', () => {
  it('should create an instance of class', () => {
    const repo = new BaseRepository();

    expect(repo).not.toBeNull();
  });
});

describe('assertion testing', () => {

  it('should pull database', () => {
    const repo = new BaseRepository();

    expect(repo.getDb()).not.toBeNull();
  });

});
