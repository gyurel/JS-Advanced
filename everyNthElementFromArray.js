function printerNthElement(arr, nthElement){

    let resultArray = [];

    for (let index = 0; index < arr.length; index += nthElement){

        let currentElemnt = arr[index];
        console.log(currentElemnt)

    }
    // console.log(resultArray)
    return resultArray
}

printerNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)

// printerNthElement(['dsa',
// 'asd', 
// 'test', 
// 'tset'], 
// 2

// )

// printerNthElement(['1', 
// '2',
// '3', 
// '4', 
// '5'], 
// 6
// )