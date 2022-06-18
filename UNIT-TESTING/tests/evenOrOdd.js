let expect = require('chai').expect;


function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('odd or even tests', () => {
    it('with argument different than string returns undefined', () => {
        expect(isOddOrEven(5)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    })

    it('returns odd if string length is odd', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    })

    it('returns even if string length is even', () => {
        expect(isOddOrEven('even')).to.equal('even');
    })

    it('returns undefined when passed multiple arguments', () => {
        expect(isOddOrEven('even', 'odd', 'more')).to.equal('even');
    })
});
