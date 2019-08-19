class Interfaz {
    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }
    construirSelect(){
        cotizador.obtenerMonedasAPI()
            .then( monedas => {
                const select = document.querySelector('#criptomoneda');
                for( const [key, value] of Object.entries(monedas.monedas.Data ) ){
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            });
    }
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }
    mostrarResultado( resultado, moneda, crypto){
        const resultadoAnterior = document.querySelector('#resultado > div');
        if ( resultadoAnterior) {
            resultadoAnterior.remove();
        }
        const datosMoneda = resultado[crypto][moneda];
        let lastUpdate = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-ES');
        let templateHTML =`
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultados:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL}
                    es de : ${datosMoneda.PRICE.toFixed(2)} ${datosMoneda.TOSYMBOL}</p>
                    <p>Variación último día  ${datosMoneda.CHANGEPCTDAY.toFixed(2)}%</p>
                    <p>Última actualización: ${lastUpdate}</p>
                </div>
            </div>
        `;
        this.mostrarOcultarSpinner('block');
        setTimeout(() => {
            this.mostrarOcultarSpinner('none');
            document.querySelector('#resultado').innerHTML = templateHTML;    
        }, 3000);
    }
    mostrarOcultarSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}
