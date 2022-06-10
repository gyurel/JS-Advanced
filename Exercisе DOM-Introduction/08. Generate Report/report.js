function generateReport() {
    let tableHead = Array.from(document.querySelectorAll('thead tr th')) 

    let tableRows = document.querySelectorAll('tbody tr');
    let outputArea = document.getElementById('output');

    let resultArr = []

    for (let index = 0; index < tableHead.length; index++){
        let currentHeadElement = tableHead[index];
        if (currentHeadElement.firstElementChild.checked === true){
            for (let rowindex = 0; rowindex < tableRows.length; rowindex++){

                let currentData = tableRows[rowindex].children[index].textContent;

                if(resultArr[rowindex]){
                    resultArr[rowindex][currentHeadElement.textContent.toLowerCase().trim()] = currentData;
                } else {
                    resultArr[rowindex] = {};
                    resultArr[rowindex][currentHeadElement.textContent.toLowerCase().trim()] = currentData;
                }
            }
        }
    }

    outputArea.textContent = JSON.stringify(resultArr)

}
