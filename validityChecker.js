function check(...params){
    let x1 = params[0]
    let y1 = params[1]
    let x2 = params[2]
    let y2 = params[3]

    
    let calc1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2)
    let calc1Validity = true
    if (calc1 % 1 != 0){
        calc1Validity = false
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${calc1Validity ? 'valid': 'invalid'}`)


    let calc2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2)
    let calc2Validity = true
    if (calc2 % 1 != 0){
        calc2Validity = false
    }
    console.log(`{${x2}, ${y2}} to {0, 0} is ${calc2Validity ? 'valid': 'invalid'}`)


    let calc3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    let calc3Validity = true
    if (calc3 % 1 != 0){
        calc3Validity = false
    }
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${calc3Validity ? 'valid': 'invalid'}`)

}

// check(3, 0, 0, 4)
check(2, 1, 1, 1)
