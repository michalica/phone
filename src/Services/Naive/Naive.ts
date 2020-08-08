import WordDeterminationInterface from "../TNine/WordDetermination.interface";
import Button from "../../models/Button";


/*
*
* Algorithm from here http://mitchrobb.com/blog/Solving-T9-Autocomplete-with-a-Prefix-Tree/
* */

export default class Naive implements WordDeterminationInterface {
    public compute(digits: Button[]): string[]
    {
        return this.getWords(digits);
    }

    private getWords(digits: Button[]): string[]
    {
        let results = [''];

        digits.forEach((button: Button) => {
            results = Naive.addDigit(results, button.getContent())
        })

        return results;
    }

    private static addDigit(array: string[], options: string): string[]
    {
        const newArray = [];
        for(let i = 0; i < array.length; i++) {
            // for all the solutions so far
            const subSolution = array[i];
            for(let x = 0; x < options.length; x++) {
                const letter = options[x];
                // for every letter corresponding to this digit,
                // we create a new array combining that subsolution and the option,
                // and push it into our new result.
                newArray.push(subSolution.concat(letter));
            }
        }
        return newArray;
    }
}
