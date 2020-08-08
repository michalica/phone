import TNine from "../TNine/TNine";
import Button from "../../models/Button";
import ButtonsResolver from "../ButtonsResolver/ButtonsResolver";

export default class GetWordsHandler{
    constructor(
        private tNine = new TNine(),
    ) {
    }
    public handle(digits: string): string[]
    {
        if(!digits)
        {
            return [];
        }

        const buttons = GetWordsHandler.getButtons(digits);

        return this.tNine.executeAlgorithm(buttons);
    }

    private static getButtons(digits: string): Button[]
    {
        return ButtonsResolver.forDigits(digits).resolve();
    }
}