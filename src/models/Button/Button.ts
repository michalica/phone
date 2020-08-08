
export default class Button {
  constructor(
        private identifier: number,
        private content: string,
    ) {
  }

  public getIdentifier(): number {
    return this.identifier;
  }

  public getContent(): string {
    return this.content;
  }
}
