function calculateFruits(...params){
    let commandList = params

    let fruitName = commandList[0]
    let fruitWaight = commandList[1] / 1000
    let fruitPrice = commandList[2]
    let total = fruitPrice * fruitWaight

    console.log(`I need $${total.toFixed(2)} to buy ${fruitWaight.toFixed(2)} kilograms ${fruitName}.`)
}

calculateFruits('orange', 2500, 1.80)
