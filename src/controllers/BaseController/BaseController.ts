import {Context, Next} from "koa";
import ButtonController from "../ButtonController/ButtonController";
import ButtonControllerInterface from "../ButtonController/ButtonControllerInterface";

export default class BaseController {

    constructor(
        protected context: Context,
        protected next: Next
    ) {
    }
}

export type Controller = typeof ButtonController;
export type Actions = keyof ButtonControllerInterface;