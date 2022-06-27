class Stringer {
    constructor (innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length){
        this.innerLength += length;
        this.length < 0 ? 0: this.length; 
    }

    decrease(length){
        this.innerLength -= length;
        this.innerLength = this.innerLength < 0 ? 0: this.innerLength; 
    }

    toString(){
        if(this.innerString.length > this.innerLength){
            return `${this.innerString.slice(0, this.innerString.length - (this.innerString.length - this.innerLength))}...`;
        } else if (this.innerLength == 0){
            return `...`;
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
