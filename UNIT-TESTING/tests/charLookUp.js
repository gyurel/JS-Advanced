let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupChar Tests', () => {
    it('returning undefined when first argument different from string', () => {
        expect(lookupChar(8, 5)).to.be.undefined;
    })

    it('return undefined if index different than interger', () => {
        expect(lookupChar('string', 3.5)).to.be.undefined;
    })

    it('return "incorrect index" when index smaller than zero', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
    })

    it('return "incorrect index" when index bigger than length minus one', () => {
        let currentString = 'string'
        expect(lookupChar(currentString, currentString.length)).to.equal('Incorrect index');
    })

    it('return the char at the index if everything is correct', () => {
        let currentString = 'string';
        for (let index = 0; index < currentString.length; index++) {
            const currentIndex = index;
            expect(lookupChar(currentString, index)).to.equal(currentString[index]);
        }
    })
})
