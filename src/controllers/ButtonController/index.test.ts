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
        ctx.request.query.digits = '1';
        const controller = new ButtonController(ctx, nextMock);
        controller.getWords();

        expect(ctx.body).toEqual({
            words: 'Hello world'
        })
    })

    it('get should return empty array when no digits are specified', () => {

        const nextMock = jest.fn();

        const controller = new ButtonController(ctx, nextMock);
        controller.getWords();

        expect(ctx.body).toEqual({
            words: []
        })
    })
})