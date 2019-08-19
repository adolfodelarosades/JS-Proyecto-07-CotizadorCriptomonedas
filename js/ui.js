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
}