function search() {
    let elements = document.querySelectorAll('ul#towns li');
    let searchText = document.getElementById('searchText').value;
    let resultTextElement = document.getElementById('result');
    let matches = 0

    for (const element of elements) {
        element.style.fontWeight = 'normal';
        element.style.textDecoration = ''
    }

    for (let element of elements) {
        let currentText = element.textContent;

        if (currentText.match(searchText)){
            matches++;
            element.style.fontWeight = 'bold';
            element.style.textDecoration = 'underline'
        }
    }

    let resultText = `${matches} matches found`

    resultTextElement.textContent = resultText
}
