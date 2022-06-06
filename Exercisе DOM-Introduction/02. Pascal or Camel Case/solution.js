function solve() {
    let text = document.getElementById('text').value.toLocaleLowerCase().split(' ');
    let caseToTransform = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    let resultString = ''

    if (caseToTransform == 'Camel Case'){
        for (let index = 0; index < text.length; index++){
            if (index > 0) {
                let currentString = text[index][0].toUpperCase() + text[index].slice(1);
                resultString = resultString + currentString;
            } else {
                resultString = resultString + text[index];
            }
        }

    } else if (caseToTransform == 'Pascal Case'){
        for (let index = 0; index < text.length; index++){
            let currentString = text[index][0].toUpperCase()  + text[index].slice(1);
            resultString = resultString + currentString;
        }

    } else {
        resultString = 'Error!';
    }

    result.textContent = resultString;
}
