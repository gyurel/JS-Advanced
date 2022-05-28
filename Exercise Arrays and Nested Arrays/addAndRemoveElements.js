function addReoveElements(arr){
    let num = 1;
    let resultArr = [];

    for (let index = 0; index < arr.length; index++){

        let currentCommand = arr[index];

        if (currentCommand == 'add'){
            resultArr.push(num);
            num++
        }else if(currentCommand == 'remove'){
            if(resultArr.length > 0){
                resultArr.pop();
            }
            num++
        }
    }

    if (resultArr.length > 0){
        for (el of resultArr){
            console.log(el);
        }        
    } else {
        console.log('Empty')
    }
}

// addReoveElements(['add', 
// 'add', 
// 'add', 
// 'add']
// )

addReoveElements(['remove', 
'remove', 
'remove']
)
