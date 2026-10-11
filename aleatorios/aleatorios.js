
function generarNumeroAleatorio() {
    let numero;
    numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}


function generarAleatorios() {
    let aleatorios = [];

    let cantidad = recuperarFloat("txtCantidad");

    if (!Number.isInteger(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Ingrese un número entero entre 5 y 20.");
        return;
    }

   
for (let indice = 0; indice < cantidad; indice++) {
    console.log(indice);

    let numeroGenerado = generarNumeroAleatorio();

    aleatorios.push(numeroGenerado);
}

console.log(aleatorios);

}

