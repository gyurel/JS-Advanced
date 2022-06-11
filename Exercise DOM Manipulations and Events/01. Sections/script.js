function create(words) {
   let contentDiv = document.getElementById('content')

   for (let word of words){
      let divElement = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      divElement.addEventListener('click', onClick);
      divElement.appendChild(paragraph);
      contentDiv.appendChild(divElement);
   }

   function onClick(event){
      event.currentTarget.children[0].style.display = '';
   }
}
