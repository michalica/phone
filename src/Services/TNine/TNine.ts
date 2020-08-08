import WordDeterminationInterface from "./WordDetermination.interface";
import Button from "../../models/Button";
import Naive from "../Naive";

export default class TNine
{
    private algorithm: WordDeterminationInterface = new Naive();

    public setAlgorithm(newAlgorithm: WordDeterminationInterface): void
    {
        this.algorithm = newAlgorithm;
    }

    public executeAlgorithm(digits: Button[]): string[]
    {
        return this.algorithm.compute(digits);
    }
}