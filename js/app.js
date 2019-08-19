// Leer el formulario
const formulario = document.querySelector('#formulario');

// EventListener
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();


    // Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');    
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
 
    // Leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    if( monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
        // Arrojar una alerta de error
    }else{
        // Todo bien, consultar la api
    
});