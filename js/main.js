let articulo = 2599;
console.log("El precio del artículo es $" + articulo);

console.log("----------------------");

let carrito = parseInt(prompt("Ingrese la cantidad de artículos"));
if (isNaN(carrito)){
    alert("Ingrese un número válido");
} else {
    if (carrito > 5){
        alert("El número máximo de artículos es 5. Por favor, seleccione otro valor");
    } else {
        console.log("Se agregaron al carrito " + carrito + " artículos");
        let total = carrito * articulo;
        console.log("----------------------------");
        console.log("El monto total es: $" + total);
        console.log("Detalles del carrito:");
        for (let i = 1; i <= carrito; i++) {
            console.log("Articulo " + i + ": $" + articulo);
        }
        metodoPago();
        console.log("Fin del programa");
    }
}



function metodoPago() {
    let metodo = prompt("Ingrese el método de pago: efectivo, transferencia, tarjeta, mercado pago").toLowerCase();
    switch (metodo) {
        case "efectivo":
            console.log("----------------------------");
            console.log("Pagas con efectivo");
            console.log("----------------------------");
            console.log("Tu número de comprobante es " + ean13());
            console.log("----------------------------");
            console.log("Puedes abonarlo en cualquier sucursal de Rapipago");
            console.log("----------------------------");
            break;
        case "transferencia":
            console.log("Pagas con transferencia");
            console.log("----------------------------");
            console.log("Por favor, abona el monto total al siguiente CBU: 0000590940090418135201");
            console.log("----------------------------");
            break;
        case "tarjeta":
            console.log("Pagas con tarjeta");
            alert("Estamos verificando tu pago, recibiras un mail una vez procesado")
            break;
        case "mercado pago":
            console.log("Pagaste con Mercado Pago");
            console.log("Por favor ingresa al siguiente link para abonar con Mercado pago:.....");
            break;
        default:
            console.log("No seleccionaste un método de pago válido");
    }
}

function ean13() {
    const min = Math.pow(10, 12); // Valor mínimo de 13 cifras
    const max = Math.pow(10, 13) - 1; // Valor máximo de 13 cifras
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

