//CONSTRUCTOR DE MONTAÑAS
export default class Montana {
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
        this.tiempoTotalFinal = montana.tiempo;
        }
        
        //sobre el peso
        agregarPeso() {
            this.peso++;

            if ((this.peso > 15) && (this.id == 0)) {
                swal({
                    title: "Llevas demasiado peso!",
                    text: "Este cerro se puede hacer en el día o bien dormir en el refugio, te recomendamos que lleves un peso menor a 10kg",
                    icon: "warning",
                    buttons: {
                        confirm : {text:'Ok!',className:'btn btn-success'},              
                        }
                });
            } else if ((this.peso < 3) && (this.id == 1)) {
                swal({
                    title: "Tu peso es muy ligero!",
                    text: "Si bien es un cerro que podría realizarse en el día, neccesitas llevar ropa de nieve y protección solar adecuada",
                    icon: "warning",
                    buttons: {
                        confirm : {text:'Ok!',className:'btn btn-success'},              
                        }
                  });
            } else if ((this.peso < 5) && (this.id == 2)) {
                swal({
                    title: "Tu peso es muy ligero!",
                    text: "Deberías tener más equipaje debido al equipo de pernocte y a la ropa para bajas temperaturas de este cerro",
                    icon: "warning",
                    buttons: {
                        confirm : {text:'Ok!',className:'btn btn-success'},              
                        }
                  });
            } else if ((this.peso > 15) && (this.id == 3)) {
                swal({
                    title: "Llevas demasiado peso!",
                    text: "En este cerro deberás atravesar pasajes con sogas y necesitas ir lo más liviano posible, te recomendamos dormir en el refugio para ahorrarte el peso de la carpa",
                    icon: "warning",
                    buttons: {
                        confirm : {text:'Ok!',className:'btn btn-success'},              
                        }
                  });            
            } else if ((this.peso < 3) && (this.id == 4)) {
                swal({
                    title: "Tu peso es muy ligero!",
                    text: "Recuerda que este cerro no dispone de agua para beber en el camino por lo cual deberás llevarla toda en tu equipaje",
                    icon: "warning",
                    buttons: {
                        confirm : {text:'Ok!',className:'btn btn-success'},              
                        }
                  });
            }
        }
        
        quitarPeso() { 
            this.peso--;
        }

        modificaSegunPeso () {//actualiza el tiempo agregando/quitando 12 minutos cada kg de peso
            this.tiempoTotal = this.tiempo + (0.12 * this.peso)
        }

        //sobre el clima
        modificaPrimavera() {
            this.estaciones = 0;
        }
        modificaVerano() {
            this.estaciones = 0.24;
        }
        modificaOtono() {
            this.estaciones = 0.34;
        }
        modificaInvierno() {
            this.estaciones = 0.45;

            if ((this.estaciones == 0.45) && (this.id == 2)) {
                swal({
                    title: "No puedes realizar este trekking en invierno!",
                    text: "Este cerro permanece cerrado a partir de mayo hasta la primavera por las altas nevadas",
                    icon: "error",
                    buttons: {
                        confirm : {text:'Ok, cambiaré de estación',className:'btn btn-success'},              
                        }
                  });
                } else if ((this.estaciones == 0.45) && (this.id == 3)) {
                swal({
                    title: "Dificultad extrema!",
                    text: "En el invierno, este trekking aumenta su complejidad debido a los cruces en sogas que hay que realizar",
                    icon: "error",
                    buttons: {
                        confirm : {text:'Ok, asumo el riesgo!',className:'btn btn-success'},              
                        }    
                  });
             }       
          }

        modificaSegunEstacion() {
            this.tiempoTotalFinal = this.tiempoTotal + this.estaciones;
        }
        
}