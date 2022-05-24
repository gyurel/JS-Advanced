function roadRadar(speed, location){
    let speedLimitMotorway = 130
    let speedLimitInterstate = 90
    let speedLimitCity = 50
    let speedLimitResidential = 20

    let currentSpeedLimit = undefined

    if(location == 'motorway'){

        currentSpeedLimit = speedLimitMotorway

    }else if(location == 'interstate'){
        
        currentSpeedLimit = speedLimitInterstate

    }else if(location == 'city'){

        currentSpeedLimit = speedLimitCity

    }else if(location == 'residential'){

        currentSpeedLimit = speedLimitResidential

    }


    if (speed  <= currentSpeedLimit){

        console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`)

    }else{
        if (speed - currentSpeedLimit <= 20){

            let status = 'speeding'
            console.log(`The speed is ${speed - currentSpeedLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${status}`)
        }else if(speed - currentSpeedLimit <= 40){

            let status = 'excessive speeding'
            console.log(`The speed is ${speed - currentSpeedLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${status}`)

        }else{
            
            let status = 'reckless driving'
            console.log(`The speed is ${speed - currentSpeedLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${status}`)

        }

            
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')
