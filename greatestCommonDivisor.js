function funcionGreatestDevisor(...params){
    let input = params
    let number1 = params[0]
    let number2 = params[1]
    let result = 0

    for(let i = 1; i < Math.min(input) + 1; i++){
        if(number1 % i === 0 && number2 % i === 0){
            if(index > result){
                result = index
            }
        }
    }
    console.log(result)
}

funcionGreatestDevisor(15, 5)
