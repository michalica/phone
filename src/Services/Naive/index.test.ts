import Naive from "./Naive";
import Button from "../../models/Button";

describe('smoke test', () => {
    it('should create instance', () => {
        const instance = new Naive();

        expect(instance).not.toBeNull();
    });
})
describe('snapshot tests', () => {
    let instance: Naive;
    beforeEach(() => {
        instance = new Naive();
    })

    it('compute for one button', () => {

        const button = new Button(2, 'abc');

        expect(instance.compute([button])).toMatchSnapshot();
    });

    it('compute for two buttons', () => {

        const button = new Button(2, 'abc');
        const button2 = new Button(3, 'def');
        expect(instance.compute([button, button2])).toMatchSnapshot();
    });

    it('compute for two buttons', () => {

        const button = new Button(2, 'abc');
        const button2 = new Button(3, 'def');
        const button3 = new Button(3, 'ghi');

        expect(instance.compute([button, button2, button3])).toMatchSnapshot();
    });

})