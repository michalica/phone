import Button from "../../models/Button/Button";

import ButtonRepository from './ButtonRepository';

describe('smoke test', () => {
  it('should create an instance of class', () => {
    const repo = new ButtonRepository();

    expect(repo).not.toBeNull();
  });
});
describe('assertion testing', () => {

  let repo: ButtonRepository;

  beforeEach(() => {
    repo = new ButtonRepository();

  });

  it('should return instance with id', () => {

    expect(repo.getButtonWithId(2)).toBeInstanceOf(Button);
  });

  it('should return correct data', () => {

    expect(repo.getButtonWithId(2)?.getContent()).toBe('abc');
  });

  it('should return null if data does not exist', () => {

    expect(repo.getButtonWithId(1)).toBeNull();
  });
});
