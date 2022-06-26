function ticketGenerator (ticketArr, sortCriteria){
    let resultArr = []

    for (let ticket of ticketArr){
        let [destination, price, status] = ticket.split('|');

        class Ticket {
            constructor (destination, price, status) {
                this.destination = destination;
                this.price = Number(price);
                this.status = status;
            }
        }

        let currentTicket = new Ticket ( destination, price, status);

        resultArr.push(currentTicket);
    }

    if(resultArr.length > 1 && (sortCriteria == 'destination' || sortCriteria == 'status')){
        resultArr = resultArr.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    } else {
        resultArr = resultArr.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
    }

    return resultArr;
}


console.log(ticketGenerator(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))
