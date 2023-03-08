const montanas = [
    {
        nombre: "Laguna Negra",
        dificultad: "Media",
        altura: 1730,
        desnivel: 800,
        estaciones: 0,
        tiempo: 5,
        img: "/calculadoraMontana_DiPaola/img/galerias/lagunaNegra.jpg",

    },
    {
        nombre: "Cerro Catedral",
        dificultad: "Alta",
        altura: 2000,
        desnivel: 1050,
        estaciones: 0,
        tiempo: 8,
        img: "/calculadoraMontana_DiPaola/img/galerias/cerroCatedral.jpg",
    },
    {
        nombre: "Cerro Tronador",
        dificultad: "Media",
        altura: 2000,
        desnivel: 1050,
        estaciones: 0,
        tiempo: 8,
        img: "/calculadoraMontana_DiPaola/img/galerias/cerroTronador.jpeg",
    },
    {
        nombre: "Laguna Jakob",
        dificultad: "Media",
        altura: 1600,
        desnivel: 850,
        estaciones: 0,
        tiempo: 7.5,
        img: "/calculadoraMontana_DiPaola/img/galerias/lagunaJakob.jpeg",
    },
    {
        nombre: "Cerro Piltriquitron",
        dificultad: "Media",
        altura: 1700,
        desnivel: 950,
        tiempo: 6.5,
        estaciones: 0,
        img: "/calculadoraMontana_DiPaola/img/galerias/cerroPiltriquitron.jpg",
    },
];

function imprimirMontanasHtml(array){


    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";


    for (const montana of montanas) {

        let tarjeta = document.createElement("div");


    tarjeta.innerHTML = `

    <div class="montanaCuadro">
    <div class="montanaBody">
        <img src="${montana.img}" class="montanaImg" alt="">
        <h3>${montana.nombre}</h2>
        <h5>Dificultad ${montana.dificultad}</h5>
        <p>${montana.tiempo}hs</p>

        <div class="btn-comparar">
            <button id="comparar${montana.nombre}${montana.nombre}" type="button" class="btn btn-dark"> Comparar </button>
        </div>
    </div>
</div>      `;
    contenedor.appendChild(tarjeta);
}
}


//ejecuto funciones
imprimirMontanasHtml(montanas); //imprime las tarjetas de las montañas en el html