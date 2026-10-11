let notas = [];

function arreglarElemento(){
 notas.push(5);
 notas.push(10);
 console.log(notas.length);
}

function recorrerArreglo(){
    let notaR;
    for (let indice=0; indice<notas.length; indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}

function probarAgregar(){
let notaRecuperada;
notaRecuperada= recuperarInt("txtNota");
agregarNota(notaRecuperada);
}

function agregarNota(nota){
    notas.push(nota);
    mostrarNotas();

}


function crearPromedio() {
    let sumarNotas = 0;
    let promedio;

    if (notas.length === 0) {
    return 0;
}

    for (let indice = 0; indice < notas.length; indice++) {
        sumarNotas = sumarNotas + notas[indice];
    }

    promedio = sumarNotas / notas.length;

    return promedio;
}

console.log(crearPromedio());

function generarTabla(){
    let contenidoTabla = "";
    let componenteTabla=document.getElementById("divTablas");
    contenidoTabla += "<table><tr><td>UNO</td></tr>"+"<tr><td>DOS</td></tr></table>";
    componenteTabla.innerHTML=contenidoTabla;
}

function mostrarNotas(){
    let cmpTabla = document.getElementById("divTablas");
    let contenidoTabla = "<table><tr><td>NOTA</tr></td>";
    let miNota;
    for (let i=0 ; i<notas.length; i++){
        miNota= notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr/></td>";

    }
    contenidoTabla +="</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
