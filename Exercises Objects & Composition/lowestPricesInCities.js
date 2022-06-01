function findLowesPrice(arr){
    let resultArr = []

    for (const element of arr){
        let currentProductObj = {}
        let[townName, productName, productPrice] = element.split(' | ');
        productPrice = Number(productPrice);

        if (resultArr.length > 0){
            let found = false
            for ( const product of resultArr){
                if (product['productName'] == productName){
                    found = true;
                    if (product['price'] > productPrice){
                        product['price'] = productPrice;
                        product['town'] = townName;
                        break;
                    }
                } 
            }    
            if (!found) {
                let currentObj = {};
                currentObj['productName'] = productName;
                currentObj['price'] = productPrice;
                currentObj['town'] = townName;
                resultArr.push(currentObj);
            }
            
        } else {
            let currentObj = {}
                    currentObj['productName'] = productName;
                    currentObj['price'] = productPrice;
                    currentObj['town'] = townName;
                    resultArr.push(currentObj);
        }
    }
    for ( const object of resultArr){
        console.log(`${object['productName']} -> ${object['price']} (${object['town']})`)
    }
}

findLowesPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)
