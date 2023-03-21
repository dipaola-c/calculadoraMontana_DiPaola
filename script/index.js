import {montanas} from "./arrayMontanas.js"
import Montana from "./constructor.js";

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

        <div class="btn-group btn-group-toggle" data-toggle="buttons" style="padding: 2px">
            <label class="btn btn-secondary">
            <input type="radio" name="options" id="otono${montana.nombre}${montana.id}" autocomplete="off"> Otoño
            </label>
            <label class="btn btn-secondary">
            <input type="radio" name="options" id="invierno${montana.nombre}${montana.id}" autocomplete="off"> Invierno
            </label>
            <label class="btn btn-secondary">
            <input type="radio" name="options" id="primavera${montana.nombre}${montana.id}" autocomplete="off"> Primavera
            </label>
            <label class="btn btn-secondary">
            <input type="radio" name="options" id="verano${montana.nombre}${montana.id}" autocomplete="off"> Verano
            </label>
        </div>

        <div style="display: flex" style="padding: 2px">
            <button id="agregarPeso${montana.nombre}${montana.id}" type="button" class="btn btn-secondary btn-sm" style="margin: 2px"> Agregar 1kg de peso </button>
            <button id="quitarPeso${montana.nombre}${montana.id}" type="button" class="btn btn-secondary btn-sm" style="margin: 2px"> Quitar 1kg de peso </button>
        </div>

        <div class="btn-comparar">
            <button id="comparar${montana.nombre}${montana.id}" type="button" class="btn btn-success"> Comparar </button>
        </div> 

    </div>
</div>      `;
    contenedor.appendChild(tarjeta);  //agrego las tarjetas al final del div contenedor


    let botonPeso = document.getElementById(`agregarPeso${montana.nombre}${montana.id}`);
    botonPeso.addEventListener("click", () => agregarLaTabla(montana));

    let botonMenosPeso = document.getElementById(`quitarPeso${montana.nombre}${montana.id}`);
    botonMenosPeso.addEventListener("click", () => eliminarDeLaTabla(montana.id));

    const btn = document.getElementById(`comparar${montana.nombre}${montana.id}`);        
    const radioButtons = document.querySelectorAll('input[name="options"]');
    btn.addEventListener("click", () => {
        let seleccionaEstacion;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                seleccionaEstacion = radioButton.id;
                break;
            }
        }

        if(seleccionaEstacion === `primavera${montana.nombre}${montana.id}`){
            modificaSegunPrimavera(montana.id);       
        } else if(seleccionaEstacion === `verano${montana.nombre}${montana.id}`) {
            modificaSegunVerano(montana.id); 		
        } else if(seleccionaEstacion === `otono${montana.nombre}${montana.id}`) {
            modificaSegunOtono(montana.id); 
		} else if(seleccionaEstacion === `invierno${montana.nombre}${montana.id}`) {
            modificaSegunInvierno(montana.id);         
        }
    });
}
}



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
                <td>${montana.peso}kg</td>
                <td>${montana.tiempoTotalFinal}hs</td>
                <td><button id="eliminar${montana.nombre}" class="btn btn-secondary btn-sm">Eliminar</button></td>
      `;

        bodyTabla.appendChild(datos);

        let botonEliminar = document.getElementById(`eliminar${montana.nombre}`);
        botonEliminar.addEventListener("click", () => eliminarDeLaTabla(montana.id));
    }
}


//FUNCIONES
function modificaSegunInvierno(id) {
    let index = comparar.findIndex((element) => element.id === id);

    if (comparar[index].peso > 0) {
        comparar[index].modificaInvierno();
        comparar[index].modificaSegunEstacion();
    } else {
        comparar.splice(index, 1);
    }
    localStorage.setItem("montanasEnStorage", JSON.stringify(comparar));
    imprimirTabla(comparar);
}


function modificaSegunPrimavera(id) {
    let index = comparar.findIndex((element) => element.id === id);

    if (comparar[index].peso > 0) {
        comparar[index].modificaPrimavera();
        comparar[index].modificaSegunEstacion();
    } else {
        comparar.splice(index, 1);
    }
    localStorage.setItem("montanasEnStorage", JSON.stringify(comparar));
    imprimirTabla(comparar);
}


function modificaSegunVerano(id) {
    let index = comparar.findIndex((element) => element.id === id);

    if (comparar[index].peso > 0) {
        comparar[index].modificaVerano();
        comparar[index].modificaSegunEstacion();
    } else {
        comparar.splice(index, 1);
    }
    localStorage.setItem("montanasEnStorage", JSON.stringify(comparar));
    imprimirTabla(comparar);
}


function modificaSegunOtono(id) {
    let index = comparar.findIndex((element) => element.id === id);

    if (comparar[index].peso > 0) {
        comparar[index].modificaOtono();
        comparar[index].modificaSegunEstacion();
    } else {
        comparar.splice(index, 1);
    }
    localStorage.setItem("montanasEnStorage", JSON.stringify(comparar));
    imprimirTabla(comparar);
}



//TABLA
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

    if (comparar[index].peso > 1) {
        comparar[index].quitarPeso();
        comparar[index].modificaSegunPeso();
    } else {
        comparar.splice(index, 1);
    }

    localStorage.setItem("montanasEnStorage", JSON.stringify(comparar));
    imprimirTabla(comparar);
}


//STORAGE
function chequearMontanasEnStorage() {
    let contenidoEnStorage = JSON.parse(localStorage.getItem("montanasEnStorage"));

    if (contenidoEnStorage) {
        let array = [];

        for (const objeto of contenidoEnStorage) {
            let montana = new Montana(objeto);
            montana.modificaSegunPeso();
            array.push(montana);
        }

        imprimirTabla(array);
        return array;
    }

    return [];
}




//EJECUTO LAS FUNCIONES
imprimirMontanasHtml(montanas); //imprime las tarjetas de las montañas en el html

let comparar = chequearMontanasEnStorage();
