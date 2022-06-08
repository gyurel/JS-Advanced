function solve() {
  let inputTextArr = document.getElementById('input').value.split('.');
  let outputElement = document.getElementById('output');

  while (length.inputTextArr > 0){
    let firstSentence = inputTextArr.shift() + '.';
    let secondSentence = (inputTextArr.shift() == undefined) ? '': inputTextArr.shift() + '.';
    let thirdSentence = (inputTextArr.shift() == undefined) ? '': inputTextArr.shift() + '.';

    let currentParagraphText = firstSentence + secondSentence + thirdSentence;
    let p = document.createElement('p')
    p.textContent = currentParagraphText
    outputElement.appendChild(p)
  }
}
