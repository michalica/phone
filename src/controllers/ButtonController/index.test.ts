import ButtonController from "./ButtonController";
import { createMockContext } from '@shopify/jest-koa-mocks';
import {Context} from "koa";

describe('smoke test', () => {
    let ctx: Context;

    beforeEach(() => {
        ctx = createMockContext();
    });

    it('should create an instance', () => {

        const nextMock = jest.fn();

        const controller = new ButtonController(ctx, nextMock);

        expect(controller).not.toBeNull();
    })
})

describe('assertion tests', () => {
    let ctx: Context;

    beforeEach(() => {
        ctx = createMockContext();
    });

    it('get should return correct data', () => {

        const nextMock = jest.fn();

        const controller = new ButtonController(ctx, nextMock);
        controller.getHello();

        expect(ctx.body).toEqual({
            message: 'Hello world'
        })
    })
})