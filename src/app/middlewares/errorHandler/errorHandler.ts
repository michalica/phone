import {Context, Next} from "koa";

export const errorHandler = async(ctx: Context, next: Next): Promise<void> => {
    try {
        await next()
        const status = ctx.status || 404

        if (status === 404) {
            ctx.throw(404)
        }
    } catch (err) {
        ctx.status = err.status || 500
        if (ctx.status === 404) {
            //Your 404.jade
            ctx.body = {
                message: 'Not Found'
            };
        } else {
            //other_error jade
            ctx.body = {
                message: 'Something went wrong'
            };
        }
    }
}