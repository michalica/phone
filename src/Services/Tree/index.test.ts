import TrieTree from './TrieTree';

describe('assertion tests', () => {
    it('should get correct suggestions',  () => {
        const trieTree = TrieTree.getTieTree();
        trieTree.insert("asdfasdf", 5);
        trieTree.insert("cdfasdfas", 23);
        trieTree.insert("cdfzsvljsdf", 42);

        // let answer = trieTree.searchNode("asdfasdf");
        // console.log(answer?.value); //5
        const finded = trieTree.startsWith("cdf");

        expect(finded).toEqual(["asdfas", "zsvljsdf"]);
    });
    it('should get null ig no suggestion',  () => {
        const trieTree = TrieTree.getTieTree();
        trieTree.insert("asdfasdf", 5);
        trieTree.insert("cdfasdfas", 23);
        trieTree.insert("cdfzsvljsdf", 42);

        const finded = trieTree.startsWith("klj");

        expect(finded).toEqual(null);
    });
})