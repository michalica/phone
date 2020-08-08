import BaseController from "../BaseController/BaseController";
import {Context, Next} from "koa";

export default class ButtonController extends BaseController{
    constructor(
        context: Context,
        next: Next
    ) {
        super(context, next);
    }

    public getHello(): void
    {
        this.context.body = {
            message: 'Hello world'
        }
    }
}