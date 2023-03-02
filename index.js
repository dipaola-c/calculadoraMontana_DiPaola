class Montana {
    constructor (montana) {
        this.nombre = montana.nombre;
        this.dificultad = montana.dificultad; 
        this.altura = montana.altura;
        this.desnivel = montana.desnivel;
        this.tiempo = montana.tiempo;
        }

        agregarMontana() {
            this.nombre==this.nombre;
        }

        modificaSegunEstacion() {
            let estaciones = prompt("Ingrese la estación del año a viajar:").toLowerCase();

		if(estaciones === "primavera"){
			this.tiempo += 5;
		} else if(estaciones === "verano") {
			this.tiempo += 0;
		} else if(estaciones === "otono") {
			this.tiempo += 25;
		} else if(estaciones === "invierno") {
			this.tiempo += 50;
    }
  }

        modificaSegunPesoMochila() {
            this.tiempo = this.tiempo + (this.tiempo * (pesoMochila / 100));            
        }

        quitarPeso() {
            this.tiempo = this.tiempo - (this.tiempo * (pesoMochila / 100));
        }
 }


 function imprimirMontanasHTML(array) {
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    for (const montana of array) {
        let card = document.createElement("div");
       
        //contenido de card
        card.innerHTML = `

        <section class="imagenMontana" id="imagenMontana1">
            <img src="${montana.img}" height="500px" width="500px" alt="" />
        </section>

        <section class= "textoMontana" id="montana">
        <h1>${montana.nombre}</h1>
        <h2>${montana.dificultad}</h2>
        <button id="comparar${montana.nombre}${montana.dificultad}" type="button"> Comparar </button>
        <p></p>
        </section>` ;


        contenedor.appendChild(card);

        let boton = document.getElementById(`agregar${montana.nombre}${montana.dificultad}`);
        boton.addEventListener("click", () => compararMontanasIngresadas(montana));
    }
}



function imprimirTabla(array) {
    let contenedor = document.getElementById("comparacion-montanas");
    contenedor.innerHTML = "";

    let tabla = document.createElement("div");

    tabla.innerHTML = `
        <table id="comparadorMontanas">
            <thead>         
                <tr>
                    <th>Montana</th>
                    <th>Dificultad</th>
                    <th>Tiempo</th>
                    <th>Peso</th>
                </tr>
            </thead>

            <tbody id="bodyTabla">

            </tbody>
        </table>
    `;

    contenedor.appendChild(tabla);


    let bodyTabla = document.getElementById("bodyTabla");

    for (let montana of array) {
        let datos = document.createElement("tr");
        montana.innerHTML = `
                <td>${montana.nombre}</td>
                <td>${montana.dificultad}</td>
                <td>$${alfajor.precioTotal}</td>
                <td><button id="eliminar${alfajor.id}" class="btn btn-dark">Eliminar</button></td>
      `;

        bodyTabla.appendChild(datos);
    }

    let precioTotal = obtenerPrecioTotal(array);
    let accionesCarrito = document.getElementById("acciones-carrito");
    accionesCarrito.innerHTML = `
		<h5>PrecioTotal: $${precioTotal}</h5></br>
		<button id="vaciarCarrito" onclick="eliminarCarrito()" class="btn btn-dark">Vaciar Carrito</button>
	`;
}



const montanas = [
    {
        nombre: "Laguna Negra",
        dificultad: "Media",
        altura: 1730,
        desnivel: 800,
        tiempo: 5,
        img: "/js/calculadoraMontana_DiPaola/img/galeria/lagunaNegra.jpg",
    },
    {
        nombre: "Cerro Catedral",
        dificultad: "Alta",
        altura: 2000,
        desnivel: 1050,
        tiempo: 8,
        img: "/js/calculadoraMontana_DiPaola/img/galeria/cerroCatedral.jpg",
    },
    {
        nombre: "Cerro Tronador",
        dificultad: "Media",
        altura: 2000,
        desnivel: 1050,
        tiempo: 8,
        img: "/js/calculadoraMontana_DiPaola/img/galeria/cerroTronador.jpg",
    },
    {
        nombre: "Laguna Jakob",
        dificultad: "Media",
        altura: 1600,
        desnivel: 850,
        tiempo: 7.5,
        img: "/js/calculadoraMontana_DiPaola/img/galeria/lagunaJakob.jpg",
    },
    {
        nombre: "Cerro Piltriquitron",
        dificultad: "Media",
        altura: 1700,
        desnivel: 950,
        tiempo: 6.5,
        img: "/js/calculadoraMontana_DiPaola/img/galeria/cerroPiltriquitron.jpg",
    },
];


imprimirMontanasHTML(montanas);









// //Modifica el tiempo de tardanza según la estación del año (default: PRIMAVERA/VERANO)
// function estacionDelAno() {   
//     lagunaJakob.modificaSegunEstacion();
// }

// //Modifica el tiempo de tardanza según el peso de la mochila (default: 9kg)
// function pesoMochila() {   
//     lagunaJakob.modificaSegunPesoMochila();
// }


// //Muestra las montañas ingresadas y sus datos modificados por el usuario      
// const compararMontanasIngresadas = () => {
//     let compararMontanas = 'Compará las montañas ingresadas:';
//     listaDeMontanasIngresadas.forEach((el, index) => {
//         compararMontanas += `
//                 ${index + 1}) ${el.nombre} ---> ${el.dificultad}, ${el.altura}m, ${el.desnivel}m, ${el.tiempo}hs en subida
//                 `;
//     });
//     console.log(compararMontanas);
//     alert(compararMontanas);
// }         

// //Muestra las opciones de las montañas disponibles
// const montanasDisponibles = () => {
//     let menuOpcionesMontanas = `Escribí el número correspondiente según la montaña a seleccionar:`;
//     Montanas.forEach((el, index) => {
//         menuOpcionesMontanas += `
//                 ${index + 1}) ${el.nombre} ---> ${el.dificultad}
//                 `;
//     });
//     let menuOpciones = parseInt(prompt(menuOpcionesMontanas));     
//     listaDeMontanasIngresadas.push(Montanas[menuOpciones - 1]);      
//     }; 


// //Array de las montañas ingresadas
// const listaDeMontanasIngresadas = [];

// //Constructor de montañas e instancias

// //Montañas disponibles y datos de las mismas, el default del tiempo es en la estación PRIMAVERA/VERANO con una mochila de 9kg
// const lagunaNegra = new Montana ("Laguna Negra", "Media", 1730, 800, 5);
// const cerroCatedral = new Montana ("Cerro Catedral", "Baja", 2405, 1150, 6);
// const cerroTronador = new Montana ("Cerro Tronador", "Alta", 2000, 1050, 8);
// const lagunaJakob = new Montana ("Laguna Jakob", "Alta", 1600, 850, 7.30);
// const refugioFrey = new Montana ("Refugio Frey", "Media", 1700, 890, 4.30);

// const Montanas = [lagunaNegra, cerroCatedral, cerroTronador, lagunaJakob, refugioFrey];

// //Bienvenida general y explicación
// const bienvenida = `BIENVENIDX A TU CALCULADORA DE MONTAÑA DE BARILOCHE 
//         Te ofrecemos distintas opciones de cerros según tu ubicación y calcularemos tu tiempo estimado de trekking para que puedas organizar de la mejor forma tu viaje`
// alert(bienvenida);

// //Menú principal
// let nombreTurista = prompt ("Ingresá tu nombre");
// let menuOpciones = prompt ("Hola " + nombreTurista + ` ---> Escribí la letra correspondiente según la opción a seleccionar.: 
//             A) Cerros disponibles 
//             B) Ingresar estación del año
//             C) Ingresar peso de la mochila 
//             D) Comparar cerros seleccionados
//             E) SALIR`
//             );

// while(menuOpciones != 'E') {
//     switch (menuOpciones) {
//         case "A":
//             montanasDisponibles();
//             break;
//         case "B":
//             estacionDelAno();            
//             break;
//         case "C":
//             pesoMochila();
//             break;
//         case "D":
//             compararMontanasIngresadas();
//                 break;
//         default:
//             break;
//      }
//      menuOpciones = prompt ("Hola " + nombreTurista + ` ---> Escribí la letra correspondiente según la opción a seleccionar: 
//                 A) Cerros disponibles 
//                 B) Ingresar estación del año
//                 C) Ingresar peso de la mochila 
//                 D) Comparar cerros seleccionados
//                 E) SALIR`
//      );
//      if (menuOpciones == 'E') {
//         alert ("Gracias por utilizar nuestra Calculadora de Montaña");
//      }
//     }
