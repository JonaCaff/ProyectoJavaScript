let nombre = ingresarNombre();
console.log(nombre);

let sueldo = ingresarSueldo();
console.log(sueldo);

let paraJugar = sueldo * 0.10;
//alert(paraJugar);
console.log(paraJugar);
alert("Tenes " + paraJugar + " para gastartelos en quiniela");

let numeroJugado = numeroJugadoALaQuiniela();
console.log(numeroJugado);

let dineroJugado = plata(paraJugar);

//console.log("jugadooo" + parseFloat("0.2"));
//saca el numero ganador
//-------------------------------------------------------
let cifras = numeroJugado.length;
let numeroGanador;
let premio = 70 * dineroJugado;
if (cifras ==2){
    //para probar cuando gano
    //------
    //numeroGanador = 2;//Math.ceil(Math.random() * 100);
    //------
    numeroGanador = Math.ceil(Math.random() * 100);
} else {
    //------
    //para probar cuando gano
    //numeroGanador = 2;//Math.ceil(Math.random() * 100);
    //------
    numeroGanador = Math.ceil(Math.random() * 1000);
    premio= 600 * dineroJugado;
}
console.log ("numero jugado: " + parseInt(numeroJugado));
sueldo = parseFloat(sueldo);
if (parseInt(numeroJugado) == numeroGanador){
    console.log("ganaste");
    sueldo += parseFloat(premio - dineroJugado);
} else {
    console.log("perdiste");
    sueldo -= parseFloat(dineroJugado);
}
alert("Salio el número " + numeroGanador);
console.log(numeroGanador);
alert("Ahora la plata que tenes es " + sueldo);
console.log("Ahora la plata que tenes es " + sueldo);
//-------------------------------------------------------

//------------------Funciones----------------------------
function ingresarNombre (){
    let nombrePersona;
    nombrePersona = prompt("Ingresa nombre");
    console.log(nombrePersona.length);
    while (nombrePersona.length==0){
        alert("No ingreses un nombre vacio");
        nombrePersona = prompt("Ingresa nombre");
    }
    return nombrePersona;
}

function ingresarSueldo (){
    let sueldo;
    sueldo = prompt("Ingresa sueldo");

   // alert(isNumeric(sueldo));
    //console.log ("sueldo: " + typeof sueldo)
    //console.log ("sueldo " + !!Number(sueldo))
    while (!Number(sueldo)){
        alert("No ingreses un sueldo vacio o no numerico");
        sueldo = prompt("Ingresa sueldo");
    }
    return sueldo;
}

function numeroJugadoALaQuiniela(){
    let cifras;
    let numero;
    cifras = prompt("cuantas cifras vas a jugar");
    console.log("cifras: " + cifras)
    while ((!(cifras==="2" || cifras==="3"))) {
        cifras = prompt("Dime cuantas cifras vas a jugar, pueden se 2 o 3 cifras");
    }
    numero=jugar(cifras);
    return numero;
}

function jugar(cifras){
    console.log("entro a numeroJugado");
    let numeroJugado = prompt("Que numero queres jugar");
    while (!Number(numeroJugado) || numeroJugado.length != cifras){
        numeroJugado = prompt("Número no valido. ¿Que numero queres jugar? Acordate que si el nro jugado es menor a 10 tener que poner 0 a la izquierda.");
    }
    return numeroJugado;
}

function plata(paraJugar){
    let cuantoJuego = prompt("¿Cuanto vas a jugar?");
    console.log ("jugado $ " + parseFloat(cuantoJuego) );
    while (!Number(cuantoJuego) || parseFloat(cuantoJuego) > paraJugar){
         cuantoJuego = prompt("¿Cuanto vas a jugar realmente?");
   }
    return cuantoJuego;
}
//-------------------------------------------------------
