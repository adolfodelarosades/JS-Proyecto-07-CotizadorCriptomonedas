const cotizador = new API('5a90c0287f03f4a108f7773c751bcf169d783d9c01714ba563f5e97c882d3de9');
const ui = new Interfaz();

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
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    }else{
        // Todo bien, consultar la api
        cotizador.obtenerValores( monedaSeleccionada, criptoMonedaSeleccionada)
            .then( data => {
                console.log(data);
            });
    }
});