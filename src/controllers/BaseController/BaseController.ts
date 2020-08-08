import {Context, Next} from "koa";
import ButtonController from "../ButtonController/ButtonController";

export default class BaseController {

    constructor(
        protected context: Context,
        protected next: Next
    ) {
    }
}

export type Controller = typeof ButtonController | typeof BaseController;