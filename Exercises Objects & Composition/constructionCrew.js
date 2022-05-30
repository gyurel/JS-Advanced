function dizzyOrNot(obj){
    if (obj['dizziness']){
        let requiredAmount = obj['weight'] * 0.1 * obj['experience'];
        obj['levelOfHydrated'] += requiredAmount;
        obj['dizziness'] = false;
    }
    // console.log(obj)
    return obj
}

dizzyOrNot({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )

dizzyOrNot({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  )

dizzyOrNot({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  )
