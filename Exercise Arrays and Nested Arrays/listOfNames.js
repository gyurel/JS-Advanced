function sortNamesList(arr){
    let sortedArray = arr.sort((a, b) => a.localeCompare(b))
    let counter = 1;

    for (index in sortedArray){
        let currentElement = sortedArray[index]
        console.log(`${counter}.${currentElement}`)
        counter++
    }

    // console.log(sortedArray)
}

sortNamesList(["John", "Bob", "Christina", "Ema"])
