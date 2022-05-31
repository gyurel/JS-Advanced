function carAssembler(obj){

    let storage = {smallEngine: { power: 90, volume: 1800 },
    normalEngine: { power: 120, volume: 2400 },
    monsterEngine: { power: 200, volume: 3500 },
    hatchback: { type: 'hatchback', color: '<as required>' },
    coupe: { type: 'coupe', color: '<as required>' },
    }

    let resultObj = {model: obj['model']}

    if (obj['power'] <= 90){
        resultObj['engine'] = storage['smallEngine'];
    } else if (obj['power'] <= 120){
        resultObj['engine'] = storage['normalEngine'];
    }else if ( obj['power'] <= 200){
        resultObj['engine'] = storage['monsterEngine'];
    }

    if (obj['carriage'] == 'hatchback'){
        resultObj['carriage'] = storage.hatchback;
        resultObj['carriage']['color'] = obj.color;
    }else{
        resultObj['carriage'] = storage.coupe;
        resultObj['carriage']['color'] = obj.color;
    }

    if (obj['wheelsize'] % 2 == 0){
        let currentWheelsize = obj['wheelsize'] - 1
        resultObj['wheels'] = [currentWheelsize, currentWheelsize, currentWheelsize, currentWheelsize]
    }else{
        let currentWheelsize = obj['wheelsize']
        resultObj['wheels'] = [currentWheelsize, currentWheelsize, currentWheelsize, currentWheelsize]
    }
    return resultObj
}

carAssembler({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)

carAssembler({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)
