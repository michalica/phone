import GetWordsHandler from "./GetWordsHandler";

describe('assertion testing',  () =>{

    let handler: GetWordsHandler;

    beforeEach(() => {
        handler = new GetWordsHandler();
    })

    it('should return empty array',  () =>{
        expect(handler.handle('1')).toEqual([""]);
    });

    it('should NOT return empty array',  () =>{
        expect(handler.handle('2')).not.toEqual([]);
    });
})