import BaseController from "../BaseController/BaseController";
import {Context, Next} from "koa";
import ButtonControllerInterface from "./ButtonControllerInterface";
import GetWordsHandler from "../../Services/GetWordsHanler";

export default class ButtonController  extends BaseController implements ButtonControllerInterface{
    constructor(
        context: Context,
        next: Next
    ) {
        super(context, next);
    }

    public getWords(): void
    {
        const digits = this.context.request.query.digits;
        const handler = new GetWordsHandler();

        const result = handler.handle(digits);

        this.context.body = {
            words: result,
        }
    }
}