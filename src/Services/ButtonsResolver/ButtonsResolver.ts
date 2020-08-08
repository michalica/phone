import Button from "../../models/Button";
import ButtonRepository from "../../repositories/ButtonRepository";

export default class ButtonsResolver
{
    constructor(
        private digits: string,
        private repo: ButtonRepository = new ButtonRepository(),
    ) {
    }

    public static forDigits(digits: string): ButtonsResolver
    {
        return new ButtonsResolver(digits);
    }

    public resolve(): Button[]
    {
        const buttons: Button[] = [];

        for (let i = 0; i < this.digits.length; i++) {
            const button = this.repo.getButtonWithId(parseInt(this.digits[i]));

            if(button)
            {
                buttons.push(button);
            }
        }
        return buttons;
    }
}