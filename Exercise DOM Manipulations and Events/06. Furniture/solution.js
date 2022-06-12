function solve() {
  let furnitureInputField = document.querySelector('#exercise textarea');
  let resultTextBox = document.querySelectorAll('#exercise textarea')[1];
  // console.log(furnitureInputField)
  let table = document.querySelector('.table tbody')
  document.querySelector('#exercise button').addEventListener('click', generateFurniture);
  //  console.log(z);
  document.querySelectorAll('#exercise button')[1].addEventListener('click', burFurniture);
  // console.log(b);

  function generateFurniture(e){
    let currnetFurnituresArr = JSON.parse(furnitureInputField.value);
    for (let furnitureObj of currnetFurnituresArr){
      let tr = document.createElement('tr');

      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = furnitureObj.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      let td2 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = furnitureObj.name;
      td2.appendChild(p2);
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = furnitureObj.price;
      td3.appendChild(p3);
      tr.appendChild(td3);

      let td4 = document.createElement('td');
      let p4 = document.createElement('p');
      p4.textContent = furnitureObj.decFactor;
      td4.appendChild(p4);
      tr.appendChild(td4);

      let td5 = document.createElement('td');
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      td5.appendChild(checkBox);
      tr.appendChild(td5);
      
      table.appendChild(tr);
    }
  }

  function burFurniture(e){
    let furnitures = document.querySelectorAll('tbody tr');
    // console.log(furnitures);

    let names = [];
    let totalPrice = 0;
    let totalDecFact = 0;
    let boughtCounter = 0

    for ( let furniture of furnitures){
    
      // let avgDecFact = totalDecFact / boughtCounter;
      // console.log(furniture.children);
      let furnitureData = furniture.children;
      // console.log(furnitureData[furnitureData.length - 1].firstChild.checked)

      if (furnitureData[furnitureData.length - 1].firstChild.checked){
        boughtCounter++;
        names.push(furnitureData[1].firstChild.textContent);
        totalPrice += Number(furnitureData[2].firstChild.textContent);
        totalDecFact += Number(furnitureData[3].firstChild.textContent);
      }
    }

    let resultTextArr = [];
    resultTextArr.push(`Bought furniture: ${names.join(', ')}`);
    resultTextArr.push(`Total price: ${totalPrice.toFixed(2)}`);
    resultTextArr.push(`Average decoration factor: ${boughtCounter == 0 ? 0: totalDecFact / boughtCounter}`);

      // let namesText = `Bought furniture: ${names.join(', ')}`;
      // let totalPriceText = `Total price: ${totalPrice.toFixed(2)}`;
      // let avgDecFactorText = `Average decoration factor: ${avgDecFact}`;

    resultTextBox.value = resultTextArr.join('\n');

  }
}
