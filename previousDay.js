function previousDay(y, m, d){
    let currentDate = new Date(y, m - 1, d)
    currentDate.setDate(currentDate.getDate() - 1)

    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
}

previousDay(2016, 9, 30)
previousDay(2016, 10, 1)
