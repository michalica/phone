import ButtonsResolver from "./ButtonsResolver";

describe('assertion tests', () => {
    let instance: ButtonsResolver;

    beforeEach(() => {
        instance = ButtonsResolver.forDigits('234');
    })

    it('should resolve  and have correct length',  () => {
        const buttons = instance.resolve();

        expect(buttons.length).toEqual(3);
    })

    it('should resolve  and have correct data',  () => {
        const buttons = instance.resolve();

        expect(buttons[0].getContent()).toEqual('abc');
        expect(buttons[0].getIdentifier()).toEqual(2);

        expect(buttons[1].getContent()).toEqual('def');
        expect(buttons[1].getIdentifier()).toEqual(3);

        expect(buttons[2].getContent()).toEqual('ghi');
        expect(buttons[2].getIdentifier()).toEqual(4);

    })
})