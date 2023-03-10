//CONSTRUCTOR DE MONTAÑAS
class Montana {
    constructor (montana) {
        this.nombre = montana.nombre;
        this.dificultad = montana.dificultad; 
        this.altura = montana.altura;
        this.desnivel = montana.desnivel;
        this.estaciones = montana.estaciones;
        this.tiempo = montana.tiempo;
        }

        agregarPeso2kg() { //agrega 12 minutos cada 2kg de peso
            this.tiempo+= 0.2;
        }

        quitarPeso2kg() { //quita 12 minutos cada 12 kg de peso
            this.tiempo-= 0.2;
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
        nombre: "Laguna Negra",
        dificultad: "Media",
        altura: 1730,
        desnivel: 800,
        estaciones: "",
        tiempo: 5,
        img: "/calculadoraMontana_DiPaola/img/galerias/lagunaNegra.jpg",

    },
    {
        nombre: "Cerro Catedral",
        dificultad: "Alta",
        altura: 2000,
        desnivel: 1050,
        estaciones: "",
        tiempo: 8,
        img: "/calculadoraMontana_DiPaola/img/galerias/cerroCatedral.jpg",
    },
    {
        nombre: "Cerro Tronador",
        dificultad: "Media",
        altura: 2000,
        desnivel: 1050,
        estaciones: "",
        tiempo: 8,
        img: "/calculadoraMontana_DiPaola/img/galerias/cerroTronador.jpeg",
    },
    {
        nombre: "Laguna Jakob",
        dificultad: "Media",
        altura: 1600,
        desnivel: 850,
        estaciones: "",
        tiempo: 7.5,
        img: "/calculadoraMontana_DiPaola/img/galerias/lagunaJakob.jpeg",
    },
    {
        nombre: "Cerro Piltriquitron",
        dificultad: "Media",
        altura: 1700,
        desnivel: 950,
        tiempo: 6.5,
        estaciones: "",
        img: "/calculadoraMontana_DiPaola/img/galerias/cerroPiltriquitron.jpg",
    },
];



//IMPRIMO OPCIONES DE CERROS EN EL HTML EN EL CONTENEDOR
function imprimirMontanasHtml(montanas){
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    //CREO UNA TARJETA POR CADA CERRO DEL ARRAY
    for (const montana of montanas) {
        let tarjeta = document.createElement("div");

    tarjeta.innerHTML = `

    <div class="montanaCuadro">
    <div class="montanaBody">
        <img src="${montana.img}" class="montanaImg" alt="">
        <h3>${montana.nombre}</h2>
        <h5>Dificultad ${montana.dificultad}</h5>
        <h6>${montana.altura}mts de altura</h6>
        <h6>${montana.desnivel}mts de desnivel</h6>
        <p>${montana.tiempo}hs de subida</p>

        <div class="btn-comparar">
            <button id="agregarPeso${montana.nombre}" type="button" class="btn btn-dark"> Agregar +2kg de peso </button>
        </div>
    </div>
</div>      `;
    contenedor.appendChild(tarjeta);

    let boton = document.getElementById(`agregarPeso${montana.nombre}`);
    boton.addEventListener("click", () => imprimirTabla(montanas))
    boton.addEventListener("click", () =>
    agregarPeso2kg());
}
}




// function agregarPeso(montana) {
//     let index = comparar.findIndex((elemento) => elemento.id === montana.nombre);
//     console.log({ index });

//     if (index != -1) {
//         comparar[index].agregarPeso2kg();
//         // comparar[index].actualizarTiempo();
//     } else{
//         let montana = new Montana(montana);
//         montana.nombre = montana.nombre;
//         comparar.push(montana);
//     }

//     localStorage.setItem("montanasEnStorage", JSON.stringify(comparar));
//     imprimirTabla(comparar);
// }









//Tabla de comparación
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
                <td>${montana.tiempo}hs</td>
                <td><button id="eliminar${montana.nombre}" class="btn btn-dark">Eliminar</button></td>
      `;

        bodyTabla.appendChild(datos);

        // let botonEliminar = document.getElementById(`eliminar${montana.nombre}`);
        // botonEliminar.addEventListener("click", () => eliminarDelCarrito(alfajor.id));
    }
}




//ejecuto funciones
imprimirMontanasHtml(montanas); //imprime las tarjetas de las montañas en el html
