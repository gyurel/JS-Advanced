function solve(num){
    let number = String(num)
    let firstDigit = number[0]
    let areSame = true
    let Sum = 0

    for (let index = 0; index < number.length; index++){
        let digit = number[index]
        if (digit != firstDigit){
            areSame = false
            Sum += Number(digit)
        } else {
            Sum += Number(digit)
        }
    }
    console.log(areSame)
    console.log(Sum)
}

solve(2222222)
solve(1234)
