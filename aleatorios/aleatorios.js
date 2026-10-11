
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


function mostrarResultados(arregloNumeros) {
    let contenido = "";

    contenido = "<table border='1'>";
    contenido += "<tr><th>Índice</th><th>Número aleatorio</th></tr>";

    for (let indice = 0; indice < arregloNumeros.length; indice++) {
        contenido += "<tr>";
        contenido += "<td>" + indice + "</td>";
        contenido += "<td>" + arregloNumeros[indice] + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";

    document.getElementById("resultado").innerHTML = contenido;
}


