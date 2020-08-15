import TrieNode from "./TrieNode";
import WordRepository from "../../repositories/WordRepository";

/*
* implementation https://www.softnami.com/posts_pr/trie-tree-with-javascript.html
*
* */

export default class TrieTree {

    private static trieTree: TrieTree | null = null;

    private constructor(
        private root: TrieNode = new TrieNode(),
        private repo: WordRepository = new WordRepository(),
    ) {
        this.onInit()
    }

    public static getTieTree(
        root: TrieNode = new TrieNode(),
        repo: WordRepository = new WordRepository(),
    ): TrieTree
    {
        if(!TrieTree.trieTree)
        {
            TrieTree.trieTree = new TrieTree(root, repo);
        }
        return TrieTree.trieTree;
    }

    onInit(): void
    {
        this.repo.getAll().forEach(word => {
            if(word.length > 3)
            {
                this.insert(word, 0);
            }
        })
    }

    insert(word: string, value: number): void
    {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const index = parseInt(word[i], 36) - 10;

            if (node.arr[index] === null) {
                const temp = new TrieNode();
                node.arr[index] = temp;
                node = temp;
            } else {
                node = node.arr[index];
            }
        }
        node.isEnd = true;
        node.value = value;
    }

    getRoot(): TrieNode
    {
        return this.root;
    }

    startsWith(prefix: string): string[] | null
    {
        const node = this.searchNode(prefix);
        if (node == null) {
            return null;
        } else {
            return this.printStrings(node, "");
        }
    }

    printStrings(node: TrieNode, prefix: string, res: string[] = []): string[] {
        if (node.isEnd){
            res.push(prefix);
        }
        for (let i = 0; i < node.arr.length; i++) {
            if (node.arr[i] !== null) {
                const character = String.fromCharCode('a'.charCodeAt(0) + i);
                this.printStrings(node.arr[i], prefix + "" + (character), res);
            }
        }

        return res;
    }

    searchNode(str: string): null | TrieNode {
        let node = this.root;
        for (let i = 0; i < str.length; i++) {
            const index = parseInt(str[i], 36) - 10;
            if (node.arr[index] !== null) {
                node = node.arr[index];
            } else {
                return null;
            }
        }

        if (node === this.root)
            return null;

        return node;
    }
}