//CONSTRUCTOR DE MONTAÑAS
class Montana {
    constructor (montana) {
        this.id = montana.id;
        this.nombre = montana.nombre;
        this.dificultad = montana.dificultad; 
        this.altura = montana.altura;
        this.desnivel = montana.desnivel;
        this.estaciones = montana.estaciones;
        this.peso = montana.peso;
        this.tiempo = montana.tiempo;
        this.tiempoTotal = montana.tiempo;
        }
        
        agregarPeso() {
            this.peso++;
        }

        quitarPeso() { 
            this.peso--;
        }

        modificaSegunPeso () {//actualiza el tiempo agregando/quitando 12 minutos cada kg de peso
            this.tiempoTotal = this.tiempo + (0.12 * this.peso)
        }

        modificaSegunEstacion() {
		if(estaciones === "primavera"){
			this.tiempo += 0;
		} else if(estaciones === "verano") {
			this.tiempo += 1;
		} else if(estaciones === "otono") {
			this.tiempo += 2;
		} else if(estaciones === "invierno") {
			this.tiempo += 3;
    }
  }
 }


//ARRAY DE MONTAÑAS
const montanas = [
    {
        id: 0,
        nombre: "Laguna Negra",
        dificultad: "Media",
        altura: 1730,
        desnivel: 800,
        estaciones: "",
        peso: 0,
        tiempo: 5,
        img: "/calculadoraMontana_DiPaola/img/galerias/lagunaNegra.jpg",
        elemento1: "Mochila cómoda con varillas interiores",
        elemento2: "Bolsa de dormir o similar + aislante",
        elemento3: "Carpa de montaña con varillas de aluminio",
        elemento4: "Traje de baño en verano",
        elemento5: "Ropa de abrigo para la cumbre",
        elemento6: "Zapatillas de trekking",
        elemento7: "Comida para 2 días y 1 noche",
        elemento8: "2 litros de agua",
        elemento9: "Protección solar",
        elemento10: "GPS, radio, mapa y botiquín",
    },
    {
        id: 1,
        nombre: "Cerro Catedral",
        dificultad: "Alta",
        altura: 2000,
        desnivel: 1050,
        estaciones: "",
        peso: 0,
        tiempo: 8,
        img: "/calculadoraMontana_DiPaola/img/galerias/cerroCatedral.jpg",
        elemento1: "Mochila cómoda con varillas interiores",
        elemento2: "Bolsa de dormir o similar + aislante",
        elemento3: "Carpa de montaña con varillas de aluminio",
        elemento4: "Grampones y piqueta",
        elemento5: "Ropa de abrigo y nieve para la cumbre",
        elemento6: "Zapatillas de trekking",
        elemento7: "Comida para 2 días y 1 noche",
        elemento8: "2 litros de agua",
        elemento9: "Protección solar",
        elemento10: "GPS, radio, mapa y botiquín",
    },
    {
        id: 2,
        nombre: "Cerro Tronador",
        dificultad: "Media",
        altura: 2000,
        desnivel: 1050,
        estaciones: "",
        peso: 0,
        tiempo: 8,
        img: "/calculadoraMontana_DiPaola/img/galerias/cerroTronador.jpeg",
        elemento1: "Mochila cómoda con varillas interiores",
        elemento2: "Bolsa de dormir o similar + aislante",
        elemento3: "Carpa de montaña con varillas de aluminio",
        elemento4: "Sogas (por el terreno de este cerro no pueden clavarse estacas)",
        elemento5: "Ropa de abrigo y nieve para la cumbre",
        elemento6: "Zapatillas de trekking",
        elemento7: "Comida para 2 días y 1 noche",
        elemento8: "1 litro de agua (hay agua en todo el recorrido)",
        elemento9: "Protección solar",
        elemento10: "GPS, radio, mapa y botiquín",
    },
    {
        id: 3,
        nombre: "Laguna Jakob",
        dificultad: "Media",
        altura: 1600,
        desnivel: 850,
        estaciones: "",
        peso: 0,
        tiempo: 7.5,
        img: "/calculadoraMontana_DiPaola/img/galerias/lagunaJakob.jpeg",
        elemento1: "Mochila cómoda con varillas interiores",
        elemento2: "Bolsa de dormir o similar + aislante",
        elemento3: "Carpa de montaña con varillas de aluminio",
        elemento4: "Sogas aptas para colgarse en piedras",
        elemento5: "Ropa de abrigo y nieve para la cumbre",
        elemento6: "2 pares de zapatillas de trekking",
        elemento7: "Comida para 3 días y 2 noches",
        elemento8: "1 litro de agua (hay agua en todo el recorrido)",
        elemento9: "Protección solar",
        elemento10: "GPS, radio, mapa y botiquín",
    },
    {
        id: 4,
        nombre: "Cerro Piltriquitron",
        dificultad: "Media",
        altura: 1700,
        desnivel: 950,
        tiempo: 6.5,
        estaciones: "",
        peso: 0,
        img: "/calculadoraMontana_DiPaola/img/galerias/cerroPiltriquitron.jpg",
        elemento1: "Mochila cómoda con varillas interiores",
        elemento2: "Bolsa de dormir o similar + aislante",
        elemento3: "Carpa de montaña con varillas de aluminio",
        elemento4: "Cubretecho extra para la carpa (zona muy lluviosa)",
        elemento5: "Ropa de abrigo y nieve para la cumbre",
        elemento6: "Zapatillas de trekking",
        elemento7: "Comida para 2 días y 1 noche",
        elemento8: "2 litros de agua",
        elemento9: "Protección solar",
        elemento10: "GPS, radio, mapa y botiquín",
    },
];





//IMPRIMO OPCIONES DE CERROS EN EL HTML EN EL CONTENEDOR
function imprimirMontanasHtml(array){
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    //CREO UNA TARJETA POR CADA CERRO DEL ARRAY
    for (const montana of array) {
        let tarjeta = document.createElement("div");

    tarjeta.innerHTML = `

    <div class="montanaCuadro">
    <div class="montanaBody">
        <img src="${montana.img}" class="montanaImg" alt="">
        <figcaption>
        <li>${montana.elemento1}</li>
        <li>${montana.elemento2}</li>
        <li>${montana.elemento3}</li>
        <li>${montana.elemento4}</li>
        <li>${montana.elemento5}</li>
        <li>${montana.elemento6}</li>
        <li>${montana.elemento7}</li>
        <li>${montana.elemento8}</li>
        <li>${montana.elemento9}</li>
        <li>${montana.elemento10}</li></figcaption>
        <h3>${montana.nombre}</h2>
        <h5>Dificultad ${montana.dificultad}</h5>
        <h6>${montana.altura}mts de altura</h6>
        <h6>${montana.desnivel}mts de desnivel</h6>
        <p>${montana.tiempo}hs de subida</p>

        <div style="display: flex" style="padding: 2px">
            <button id="agregarPeso${montana.nombre}${montana.id}" type="button" class="btn btn-secondary btn-sm" style="margin: 2px"> Agregar 2kg de peso </button>
            <button id="quitarPeso${montana.nombre}${montana.id}" type="button" class="btn btn-secondary btn-sm" style="margin: 2px"> Quitar 2kg de peso </button>
        </div>

        <div class="btn-group btn-group-toggle" data-toggle="buttons" style="padding: 2px">
            <label class="btn btn-secondary active">
            <input type="radio" name="options" id="otono" autocomplete="off" checked> Otoño
            </label>
            <label class="btn btn-secondary">
            <input type="radio" name="options" id="invierno" autocomplete="off"> Invierno
            </label>
            <label class="btn btn-secondary">
            <input type="radio" name="options" id="primavera" autocomplete="off"> Primavera
            </label>
            <label class="btn btn-secondary">
            <input type="radio" name="options" id="verano" autocomplete="off"> Verano
            </label>
        </div>

        <div class="btn-comparar">
            <button id="comparar${montana.nombre}${montana.id}" type="button" class="btn btn-success"> Comparar </button>
        </div>

    </div>
</div>      `;
    contenedor.appendChild(tarjeta);  //agrego las tarjetas al final del div contenedor


    let botonPeso = document.getElementById(`agregarPeso${montana.nombre}${montana.id}`);
    botonPeso.addEventListener("click", () => agregarLaTabla(montana));

    // let boton = document.getElementById(`comparar${montana.nombre}${montana.id}`);
    // boton.addEventListener("click", () => imprimirTabla(montana));
}
}


function agregarLaTabla(objeto) {
    let index = comparar.findIndex((elemento) => elemento.id === objeto.id);
    console.log({ index });

    if (index != -1) {
        comparar[index].agregarPeso(); //método de la clase
        comparar[index].modificaSegunPeso(); //método de la clase
    } else{
        let montana = new Montana(objeto);
        montana.peso = 1;
        comparar.push(montana);
    }

    //actualización del storage
    localStorage.setItem("montanasEnStorage", JSON.stringify(comparar));
    imprimirTabla(comparar);
}

function eliminarDeLaTabla(id) {
    let index = comparar.findIndex((element) => element.id === id);

    if (comparar[index].cantidad > 1) {
        comparar[index].quitarPeso();
        comparar[index].modificaSegunPeso();
    } else {
        comparar.splice(index, 1);
    }

    localStorage.setItem("montanasEnStorage", JSON.stringify(comparar));
    imprimirTabla(comparar);
}

// function agregarPeso2kg(){

//     for (let montana of montanas) {
    
//     let agregarPeso = document.getElementById(`"agregarPeso${montana.nombre}"`)

//     agregarPeso.addEventListener("click", function() {
//         console.log("click ok");
//         // montana.peso = 2;
//         this.tiempo+= 0.2;
//     })
// }
//}

//     let agregarPeso = document.getElementById(`"agregarPeso${montana.nombre}"`)

//     agregarPeso.onclick = function() {
//     montana.peso = 2;
//     this.tiempo+= 0.2;
//     console.log(this.tiempo);
//     console.log(montana.peso);
//  }
// }





//TABLA DE COMPARACIÓN DE CERROS
function imprimirTabla(montanas) {
    let contenedor = document.getElementById("tablaComparacion");
    contenedor.innerHTML = "";

    let tabla = document.createElement("div");

    tabla.innerHTML = `
        <table id="tablaComparacion" style= "width: 100%">
            <thead>         
                <tr>
                    <th>Nombre</th>
                    <th>Dificultad</th>
                    <th>Altura</th>
                    <th>Desnivel</th>
                    <th>Estación</th>
                    <th>Peso</th>
                    <th>Tiempo subida</th>
                    <th>Acción</th>
                </tr>
            </thead>

            <tbody id="bodyTabla">

            </tbody>
        </table>
    `;

    contenedor.appendChild(tabla);

    let bodyTabla = document.getElementById("bodyTabla");

    for (let montana of montanas) {
        let datos = document.createElement("tr");
        datos.innerHTML = `
                <td>${montana.nombre}</td>
                <td>${montana.dificultad}</td>
                <td>${montana.altura}mts</td>
                <td>${montana.desnivel}mts</td>
                <td>${montana.estaciones}</td>
                <td>${montana.peso}kg</td>
                <td>${montana.tiempo}hs</td>
                <td><button id="eliminar${montana.nombre}" class="btn btn-secondary btn-sm">Eliminar</button></td>
      `;

        bodyTabla.appendChild(datos);

        let botonEliminar = document.getElementById(`eliminar${montana.nombre}`);
        botonEliminar.addEventListener("click", () => eliminarDeLaTabla(montana.id));
    }

    // let precioTotal = obtenerPrecioTotal(array);
    // let accionesCarrito = document.getElementById("acciones-carrito");
    // accionesCarrito.innerHTML = `
	// 	<h5>PrecioTotal: $${precioTotal}</h5></br>
	// 	<button id="vaciarCarrito" onclick="eliminarCarrito()" class="btn btn-dark">Vaciar Carrito</button>
	// `;
}


function filtrarBusqueda(e) {
    e.preventDefault();

    // Tomo el value del input y le agrego toLowerCase para que la búsqueda no sea
    // case sensitive
    let ingreso = document.getElementById("busqueda").value.toLowerCase();
    let arrayFiltrado = montanas.filter((elemento) => elemento.marca.toLowerCase().includes(ingreso));

    imprimirMontanasHtml(arrayFiltrado);
}

function chequearMontanasEnStorage() {
    let contenidoEnStorage = JSON.parse(localStorage.getItem("montanasEnStorage"));

    if (contenidoEnStorage) {
       
        let array = [];

        for (const objeto of contenidoEnStorage) {
           
            let montana = new Montana(objeto);
            montana.modificaSegunPeso();
            // Envio ese objeto instanciado al arrray
            array.push(montana);
        }

        imprimirTabla(array);
        return array;
    }

    // Si no existe ese array en el LS, esta función devolverá un array vacío
    return [];
}

// ************** EVENTO **************
// let btnFiltrar = document.getElementById("btnFiltrar");
// btnFiltrar.addEventListener("click", filtrarBusqueda);








//EJECUTO LAS FUNCIONES
imprimirMontanasHtml(montanas); //imprime las tarjetas de las montañas en el html

let comparar = chequearMontanasEnStorage();


//Ej. Suponiendo que tengo elementos html radio button y quiero seleccionar sólo aquel que esté en checked, ésto lo puedo lograr muy fácil con querySelector y la pseudo-clase :checked de CSS.

//let radioChecked = document.querySelector(".radio:checked")