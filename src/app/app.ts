import Koa, {Context, Next} from 'koa'
import Router from "koa-router"
import bodyParser from 'koa-bodyparser';
import {AppRoutes} from "./router/routes";
import {errorHandler} from "./middlewares/errorHandler/errorHandler";
const cors = require('@koa/cors');

export default class App{
    public init(): void
    {
        const app = new Koa();
        app.use(cors());
        const router = new Router();

        AppRoutes.forEach(route => router[route.method](route.path, (ctx: Context, next: Next) => {
            const controller = new route.controller(ctx, next);
            controller[route.action]();
        }));

        app.use(bodyParser());
        app.use(router.routes());
        app.use(router.allowedMethods());
        app.use(errorHandler)


        app.listen(process.env.PORT || 3000);
    }
}