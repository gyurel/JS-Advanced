function extractNonDecreasingSubset(arr){
    let newArray = []
    arr.reduce((acumulator, currentValue)=>{
        if (currentValue - acumulator > 0){
            newArray.push(currentValue);
            return acumulator = currentValue
        } else{
            return acumulator
        }
    }, Number.NEGATIVE_INFINITY)
    // console.log(newArray)
    return newArray
}

extractNonDecreasingSubset([20, 
    3, 
    2, 
    15,
    6, 
    1]    
    )
