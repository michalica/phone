import TNine from "../TNine/TNine";
import Button from "../../models/Button";
import ButtonsResolver from "../ButtonsResolver/ButtonsResolver";
import TreeSearch from "../TreeSearch";

const MINIMAL_TO_SUGGEST = 3;

export default class GetSuggestionsHandler{
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

        const buttons = GetSuggestionsHandler.getButtons(digits);

        if(buttons.length < MINIMAL_TO_SUGGEST)
        {
            return [];
        }

        this.tNine.setAlgorithm(new TreeSearch());

        return this.tNine.executeAlgorithm(buttons);
    }

    private static getButtons(digits: string): Button[]
    {
        return ButtonsResolver.forDigits(digits).resolve();
    }
}