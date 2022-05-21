function funcionGreatestDevisor(...params){
    let input = params
    let number1 = params[0]
    let number2 = params[1]
    let result = 0
    let smallest = Math.min(...input)

    for (let i = 1; i < smallest + 1; i++) {
        if(number1 % i == 0 && number2 % i == 0) {
            result = i;
        }
    }
    console.log(result)
}

funcionGreatestDevisor(15, 5)
funcionGreatestDevisor(2154, 458)
