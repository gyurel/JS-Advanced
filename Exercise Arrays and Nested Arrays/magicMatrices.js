function isMagicFunc(arr){
    let controlSum = arr[0].reduce((acumulator, a) => acumulator + a, 0)
    let isMagic = true

    for ( let colIndex = 0; colIndex < arr[0].length; colIndex++){
        let sumRow = 0
        for (let rowIndex = 0; rowIndex < arr.length; rowIndex++){
            if (arr[rowIndex].reduce((acumulator, a) => acumulator + a, 0) != controlSum){
                isMagic = false;
                break;
            }
            let currentDigit = arr[rowIndex][colIndex]
            sumRow += currentDigit
        }
        if (sumRow != controlSum){
            isMagic = false;
            break;
        }

    }

    console.log(isMagic)
}

isMagicFunc([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )

// isMagicFunc([[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]
//    )

// isMagicFunc([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
//    )
