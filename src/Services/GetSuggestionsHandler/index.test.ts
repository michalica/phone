import GetSuggestionsHandler from "./GetSuggestionsHandler";

describe('assertion tests', () => {
    it('correct functions was called', () => {

        const mockSet = jest.fn();
        const mockExecute = jest.fn();

        const handler = new GetSuggestionsHandler();
        handler['tNine'].setAlgorithm = mockSet;
        handler['tNine'].executeAlgorithm = mockExecute;
        handler.handle('2345');

        expect(mockSet).toHaveBeenCalled();
        expect(mockExecute).toHaveBeenCalled();
    })
    it('Hire me! was returned', () => {

        const mockSet = jest.fn();
        const mockExecute = jest.fn();

        const handler = new GetSuggestionsHandler();
        handler['tNine'].setAlgorithm = mockSet;
        handler['tNine'].executeAlgorithm = mockExecute;


        expect(handler.handle('236')).toEqual(['Hire', 'me!'])

    })
})