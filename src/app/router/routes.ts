import ButtonController from "../../controllers/ButtonController/ButtonController";
import {Controller} from "../../controllers/BaseController/BaseController";

export interface RoutesInterface
{
    path: string;
    method: "get",
    controller: Controller,
    action: string
}

export const AppRoutes: RoutesInterface[] = [
    {
        path: "/posts",
        method: "get",
        controller: ButtonController,
        action: 'getHello',
    },
];