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
                //monedas.monedas.Data Es un Objeto de Objetos
                //console.log(monedas.monedas.Data);
                //Object.entries(monedas.monedas.Data) : Conviente un objeto a array
                //console.log(Object.entries(monedas.monedas.Data));
                
                // Crear un select de criptomonedas
                const select = document.querySelector('#criptomoneda');
                //Iterar por los resultados de la API
                for( const [key, value] of Object.entries(monedas.monedas.Data ) ){
                    //console.log(key, value);
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

        // Seleccionar mensajes y añadir mensaje
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        // Quitar mensaje
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    //Imprime el resultado de la cotización
    mostrarResultado( resultado, moneda, crypto){
        //console.log(resultado);
        //console.log(resultado[crypto]);
        //console.log(resultado[crypto][moneda]);

        const datosMoneda = resultado[crypto][moneda];
        let lastUpdate = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-ES');

        // Construir el template
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

        //Insertar el resultado
        document.querySelector('#resultado').innerHTML = templateHTML;
    }
}
