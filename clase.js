//Clase para el objeto tarjeta
let item = 0;

class Card
{
    /**Declaración de ATRIBUTOS privados */
    #imagen="";
    #nombre="";
    #descripcion="";
    #etiqueta="";

    /**
     * Constructor, nos permite inicializar los valores de nuestro objeto en base a la información brindada por la API
     * @param {*} imagen Hace referencia al valor SRC que asignaremos a la etiqueta img posteriormente
     * @param {*} nombre Hace referencia al nombre del articulo
     * @param {*} descripcion Hace referencia a la breve descripción obtenida del articulo
     * @param {*} etiqueta Hace referencia a la etiqueta o categoria a la que pertenece el articulo
     */
    constructor(imagen,nombre,descripcion,etiqueta)
    {
        this.#imagen=imagen;
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#etiqueta=etiqueta;
    }

    /**Metodos Set's Permiten modificar los atributos privados del objeto (Les asigna valores)*/
    set imagen(value){this.#imagen=value;}
    set nombre(value){this.#nombre=value;}
    set descripcion(value){this.#descripcion=value;}
    set etiqueta(value){this.#etiqueta=value;}

    /**Metodos Get's permiten obtener información de los atributos del objeto */
    get imagen(){return this.#imagen;}
    get nombre(){return this.#nombre;}
    get descripcion(){return this.#descripcion;}
    get etiqueta(){return this.#etiqueta;}

    
    crearCard()
    {
        //Logica aqui
    }
}

function jsonToCard(data){

    /* Esta función transforma el array de objetos JSON a un array de ojetos CARD */
    let cards = [];
    data.forEach(d => { //Para cada elemento crea un objeto tipo card de informació unica
        let card = new Card(d.imagen, d.nombre, d.descripcion, d.categoria); //Crea objeto con valores unicos
        cards.push(card); //Almacena en un arreglo de objetos
    });
    return cards; //Retorna el arreglo de cards
}

function init(){
    //codigo inicial
}


document.body.onload = init; // Funcion que inicial cuando la pagina carga
//