function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let selectItem = document.getElementById('menu');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = newItemText.value;
    newOptionElement.value = newItemValue.value;
    selectItem.appendChild(newOptionElement);

    newItemText.value = '';
    newItemValue.value = '';
}
