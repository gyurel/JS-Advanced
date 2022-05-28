function timeToWalk(steps, footprint, speed){
    let distanceInKilometers = (steps * footprint)/1000
    let timeRelation = distanceInKilometers / speed

    let hours = Math.floor(timeRelation)
    let minutes = Math.floor(60 * (timeRelation % 1))
    let seconds = Math.ceil(60 * ((60 * (timeRelation % 1)) % 1))

    let extraMinuts = Math.floor((steps * footprint / 500))


    console.log(`${String(hours).padStart(2, '0')}:${String(minutes + extraMinuts).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)

}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)
