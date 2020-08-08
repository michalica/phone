import Button from "../../models/Button";

export default interface WordDeterminationInterface {
    compute(digits: Button[]): string[]
}