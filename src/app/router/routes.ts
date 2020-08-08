import ButtonController from "../../controllers/ButtonController/ButtonController";
import {Controller, Actions} from "../../controllers/BaseController/BaseController";

export interface RoutesInterface
{
    path: string;
    method: "get",
    controller: Controller,
    action: Actions
}

export const AppRoutes: RoutesInterface[] = [
    {
        path: "/posts",
        method: "get",
        controller: ButtonController,
        action: "getWords",
    },
];