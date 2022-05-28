function rotateArr(arr, rotator){
    for(let i = 0; i < rotator; i++){
        let currentEllement = arr.pop();
        arr.unshift(currentEllement);
    }
    console.log(arr.join(' '))
}

rotateArr(['1', 
'2', 
'3', 
'4'], 
2
)

rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)
