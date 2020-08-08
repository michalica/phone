import BaseController from "../BaseController/BaseController";
import {Context, Next} from "koa";
import ButtonControllerInterface from "./ButtonControllerInterface";

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

        if(!digits)
        {
            this.context.body = {
                words: []
            }
            return;
        }

        this.context.body = {
            words: 'Hello world'
        }
    }
}