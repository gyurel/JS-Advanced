function encodeAndDecodeMessages() {
    let messageField = document.querySelectorAll('#main div textarea')[0];
    document.querySelectorAll('#main div button')[0].addEventListener('click', encodeAndSend);
    // console.log(messageField);
    let decodeField = document.querySelectorAll('#main div textarea')[1];
    document.querySelectorAll('#main div button')[1].addEventListener('click', decodeMessage);
    // console.log(decodeField);

    function encodeAndSend (e){
        let currentMessage = messageField.value;
        let encodedMessage = ''
        for (let index = 0; index < currentMessage.length; index++){
            let currentChar = currentMessage[index];
            let asciiOfChar = currentChar.charCodeAt(0);
            let encodedChar = String.fromCharCode(asciiOfChar + 1);
            encodedMessage += encodedChar;
        }

        decodeField.value = encodedMessage;
        messageField.value = ''
    }

    function decodeMessage(e){
        let currentMessage = decodeField.value;
        let decodedMessage = ''
        for (let index = 0; index < currentMessage.length; index++){
            let currentChar = currentMessage[index];
            let asciiOfChar = currentChar.charCodeAt(0);
            let decodedChar = String.fromCharCode(asciiOfChar - 1);
            decodedMessage += decodedChar;
        }

        decodeField.value = decodedMessage;
    }
}
