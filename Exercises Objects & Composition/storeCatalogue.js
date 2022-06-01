function catalogueSorter(arr){
    arr.sort((a, b) => a.localeCompare(b));
    let firstLetter = arr[0][0];
    
    for (let element of arr){
        
        let[currentProduct, currentPrice] = element.split(' : ');
        let currentLetter = currentProduct[0];

        if (element == arr[0]){
            console.log(firstLetter);
            console.log(`  ${currentProduct}: ${currentPrice}`)
        }else {
            if(currentLetter !== firstLetter){
                console.log(currentLetter);
                firstLetter = currentLetter;
                console.log(`  ${currentProduct}: ${currentPrice}`);
            } else {
                console.log(`  ${currentProduct}: ${currentPrice}`);
            }
        }
    }
}

catalogueSorter(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)

// catalogueSorter(['Banana : 2',
// 'Rubic\'s Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Pesho : 0.000001',
// 'Barrel : 10']
// )
