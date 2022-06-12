function arraySort(arr, direction){
    direction == 'asc' ? asc(arr): desc(arr);
    

    function asc(param){
        param.sort((a, b) => a - b);
    }

    function desc(param){
        param.sort((a, b) => b - a);
    return arr
}

arraySort([14, 7, 17, 6, 8], 'asc')
arraySort([14, 7, 17, 6, 8], 'desc')
