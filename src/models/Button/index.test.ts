import Button from "./Button";

describe('smoke test', () => {
    it('should create instance', () => {
        const button = new Button(1, 'abc');

        expect(button).not.toBeNull();
    })
})

describe('assertion test', () => {
    let button: Button;

    beforeEach(() => {
        button = new Button(1, 'abc');
    })

    it('should create instance', () => {

        expect(button.getIdentifier()).toBe(1);
    })

    it('should create instance', () => {

        expect(button.getContent()).toBe('abc');
    })
})