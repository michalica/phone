export default class TrieNode {
    constructor(
        public value: number | undefined = undefined,
        public isEnd: boolean = false,
        public arr: TrieNode[] = new Array(26).fill(null),
    ) {
    }
}