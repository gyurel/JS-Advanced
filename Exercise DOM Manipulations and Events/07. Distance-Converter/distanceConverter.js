function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);
    let inputField = document.getElementById('inputDistance');
    let outputField = document.getElementById('outputDistance');
    let inputUnitsMenu = document.getElementById('inputUnits');
    let outputUnitsMenu = document.getElementById('outputUnits');

    let ratiosToMeter = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254]


    function convert(e){
        let inputValue = inputField.value;
        // console.log(inputValue)
        let inputUnit = inputUnitsMenu.selectedIndex;
        let outputUnit = outputUnitsMenu.selectedIndex;

        let outputValue = (inputValue * ratiosToMeter[inputUnit]) / ratiosToMeter[outputUnit];
        outputField.value = outputValue;
    }
}
