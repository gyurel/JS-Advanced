let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('if type of argument num not a number return undefined', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        })

        it('if argument is a number adds five to the argument', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        })

        it('to add five to the number when number is negative', () => {
        expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })

        it('to return correct value whit max deviation of 0.01 when argument is a floating point number', ()=>{
        expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
        })
    });

    describe('subtractTen', () => {
        it('if type of argument num not a number return undefined', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        })

        it('if argument is a number subtracts ten from the argument', () => {
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        })

        it('to subtract ten from the number when number is negative', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })

        it('to return correct value whit max deviation of 0.01 when argument is a floating point number', ()=>{
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
        })
    });

    describe('sum', () => {
        it('if type of argument one not a number return undefined', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
        })

        it('if type of argument two not a number return undefined', () => {
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
        })

        it('if bought arguments are numbers sum arguments', () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        })

        it('to work correct with negative arguments', () => {
            expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
        })

        it('to return correct value whit max deviation of 0.01 when arguments are floating point numbers', ()=>{
            expect(mathEnforcer.sum(5.5, 5.5)).to.be.closeTo(11, 0.01);
        })
    });
});
