function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let currentSearchText = document.getElementById('searchField');
   let tableRows = document.querySelectorAll('tbody tr');
   

   function onClick() {
      for (let row of tableRows){
         row.classList.remove('select')
         if (row.innerHTML.includes(currentSearchText.value)){
            row.className = 'select'
         }
      }
      currentSearchText.value = ''
   }
}
