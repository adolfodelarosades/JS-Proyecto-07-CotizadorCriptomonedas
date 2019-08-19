const cotizador = new API('5a90c0287f03f4a108f7773c751bcf169d783d9c01714ba563f5e97c882d3de9');
const ui = new Interfaz();
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const monedaSelect = document.querySelector('#moneda');    
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    if( monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    }else{
        cotizador.obtenerValores( monedaSeleccionada, criptoMonedaSeleccionada)
            .then( data => {
                ui.mostrarResultado( data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            });
    }
});
