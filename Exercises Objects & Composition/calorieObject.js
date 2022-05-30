function objectConstructor(arr){
    resultObject = {}
    for (let index = 0; index < arr.length; index += 2){
            resultObject[arr[index]] = Number(arr[index + 1])
    }
    console.log(resultObject)
}

objectConstructor(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

objectConstructor(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
