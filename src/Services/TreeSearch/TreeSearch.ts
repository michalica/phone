import WordDeterminationInterface from "../TNine/WordDetermination.interface";
import Button from "../../models/Button";
import Naive from "../Naive";
import TrieTree from "../Tree/TrieTree";


/*
*
* Algorithm from here http://mitchrobb.com/blog/Solving-T9-Autocomplete-with-a-Prefix-Tree/
* */

export default class TreeSearch implements WordDeterminationInterface {
    constructor(
        private naive: Naive = new Naive(),
        private trie: TrieTree = TrieTree.getTieTree(),
    ) {
    }
    public compute(digits: Button[]): string[]
    {
        const words = this.getWords(digits);

        return words.reduce((acc: string[], current: string,) => {

            const suggestions = this.trie.startsWith(current)?.map((sug: string) => {
                return current + sug;
            });

            if(suggestions)
            {
                acc = [...acc, ...suggestions]
            }

            return acc;

        }, [])


    }

    private getWords(digits: Button[]): string[]
    {
        return this.naive.compute(digits);
    }


}
