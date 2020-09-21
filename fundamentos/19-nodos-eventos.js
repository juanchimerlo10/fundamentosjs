// document.body.innerHTML='Ejemplo' imprime en body la palabra Ejemplo.

// ---Traer datos capturando el elemento----
document.getElementById("id"); //traigo la etiqueta con el id
document.getElementsByClassName("classname"); //traigo la clase
document.getElementsByTagName("tag"); //traigo el elemento por su y tag ('p')
document.querySelector("#id");//Llamo por medio de id
document.querySelector(".clase");
document.querySelectorAll("p");//Me trae un nodeList, una lista donde estan todos los tag p
document.querySelectorAll('p')[2]//Me trae el tag p ubicado en posicion 2


// ---crear elemento-------
let myp = document.createElement("p"); //creo el elemento p
myp.innerHTML = "yet another"; //le asigno el valor
document.body.appendChild(myp); //lo agrego como nodo hijo de body

// ----clonar nodo--------------
let el = document.getElementsByTagName("p")[1]; //asigno a el el elemento p de la posicion 1 en el documento.
document.body.appendChild(el.cloneNode(false)); //clono el elemento sin los datos
document.body.appendChild(el.cloneNode(true)); //clono el elemento con los datos.

document.body
  .insertBefore
  //elemento que quiero posicionar ,
  //elemento que quedara debajo
  ();

document.body.removeChild("elemento a remover");//ej document.body.removeChild(document.querySelectorAll('p')[2])
document.body.replaceChild("nuevo nodo", "nodo a reemplazar"); //Igual que insertBefore

let coordX = document.getElementById("coordX");
document.addEventListener("mousemove", function (event) {
  coordX.innerText = event.x;
});

function cambiarColor() {
  document.body.bgColor = "lightgreen";
}
