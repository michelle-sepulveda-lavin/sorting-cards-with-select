let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let pintas = ["corazones", "trebol", "diamantes", "pica"];

let cartasGeneradas = document.querySelector(".cartasGeneradas");
let generar = document.getElementById("generar");
let cantidad = document.getElementById("cant");
let ordenar = document.getElementById("ordenar")
let pasosOrdenamiento = document.querySelector(".pasosOrdenamiento")

let arrCartas = []

function generaNumero() {
    let index = Math.floor(Math.random() * numeros.length);
    return numeros[index];
}

function generaPinta() {
    let index = Math.floor(Math.random() * pintas.length);
    return pintas[index];
}


function dibujaCarta(pinta, numero) {
    let carta = document.createElement("div");
    carta.classList.add("carta");
    let interior = document.createElement("div");
    interior.classList.add("numero");
    interior.classList.add(pinta);
    let t;
    if (numero === 1) {
        t = document.createTextNode("A");
        interior.appendChild(t);
    } else if (numero === 11) {
        t = document.createTextNode("J");
        interior.appendChild(t);
    } else if (numero === 12) {
        t = document.createTextNode("Q");
        interior.appendChild(t);
    } else if (numero === 13) {
        t = document.createTextNode("K");
        interior.appendChild(t);
    } else {
        t = document.createTextNode(numero);
        interior.appendChild(t);
    }
    carta.appendChild(interior);
    cartasGeneradas.appendChild(carta);
}

function dibujaCantidad() {
    arrCartas = [];
    cartasGeneradas.innerHTML = "";
    let qty = cantidad.value;
    for (let i = 0; i < qty; i++) {
        let pinta = generaPinta();
        let numero = generaNumero();
        let obj = { "numero": numero, "pinta": pinta };
        dibujaCarta(pinta, numero);
        arrCartas.push(obj);
    }
}

function mySort() {
    pasosOrdenamiento.innerHTML= "";
    let arr = arrCartas;
    let min = 0;
    let contador = 1;
    while (min < arr.length - 1) {
        for (let i = min + 1; i < arr.length; i++) {
            let paso = document.createElement("div");
            paso.classList.add("paso");
            let nPaso = document.createElement("span");
            nPaso.innerHTML = "Paso n°" + contador;
            paso.appendChild(nPaso);
            contador++;
            if (arr[min].numero > arr[i].numero) {
                let aux = arr[min].numero;
                let aux2 = arr[min].pinta;
                arr[min].numero = arr[i].numero;
                arr[min].pinta = arr[i].pinta
                arr[i].numero = aux;
                arr[i].pinta = aux2;
            }
            for (let j = 0; j < arr.length; j++) {
                let pinta = arr[j].pinta;
                let numero = arr[j].numero;
                let carta = document.createElement("div");
                carta.classList.add("carta");
                let interior = document.createElement("div");
                interior.classList.add("numero");
                interior.classList.add(pinta);
                let t;
                if (numero === 1) {
                    t = document.createTextNode("A");
                    interior.appendChild(t);
                } else if (numero === 11) {
                    t = document.createTextNode("J");
                    interior.appendChild(t);
                } else if (numero === 12) {
                    t = document.createTextNode("Q");
                    interior.appendChild(t);
                } else if (numero === 13) {
                    t = document.createTextNode("K");
                    interior.appendChild(t);
                } else {
                    t = document.createTextNode(numero);
                    interior.appendChild(t);
                }
                carta.appendChild(interior);
                paso.appendChild(carta);
            }
            pasosOrdenamiento.appendChild(paso);
        }
        min++;
    }
    return arr;
};

generar.addEventListener("click", dibujaCantidad)
ordenar.addEventListener("click", mySort)