function sortArr(arr){
    let resultArray = [];
    let counter = 0;

    while (arr.length > 0){
        if (counter % 2 == 0){
            let currentIndex = arr.indexOf(Math.min(...arr))
            let currentElement = arr.splice(currentIndex, 1).reduce((a, b) => a + b, 0)
            resultArray.push(currentElement)
        } else {
            let currentIndex = arr.indexOf(Math.max(...arr))
            let currentElement = arr.splice(currentIndex, 1).reduce((a, b) => a + b, 0)
            resultArray.push(currentElement)
        }
        counter++
    }
    // console.log(resultArray)
    return resultArray
}

sortArr([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
