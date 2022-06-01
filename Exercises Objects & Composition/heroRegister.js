function heroRegister(arr){
    let resultArr = []
    
    for (index in arr){
        let currentInfo = arr[index].split(' / ');
        let name = currentInfo[0];
        let level = Number(currentInfo[1]);
        let items = currentInfo[2] ? currentInfo[2].split(', '): []
        
        let currentObj = {};

        currentObj['name'] = name;
        currentObj['level'] = level;
        currentObj['items'] = items;
        

        resultArr.push(currentObj);
    }
    console.log(JSON.stringify(resultArr))
}

heroRegister(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)

heroRegister(['Jake / 1000 / Gauss, HolidayGrenade'])
