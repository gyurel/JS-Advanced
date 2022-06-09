function solve() {
    let input = document.getElementById('input').value;
    let outputElement = document.getElementById('output');

    let inputTextArr = input.split('.').filter(sentence => sentence.length != 0);

    while (inputTextArr.length > 0){
        let currentParagraphText = inputTextArr.splice(0, 3).join('. ') + '.';

        let p = document.createElement('p');
        p.textContent = currentParagraphText;
        outputElement.appendChild(p);
  }
}
