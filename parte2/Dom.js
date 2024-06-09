// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.charset);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 2000);


//let texto = "Hola son fracisco soy developer Full Stack"

// const saludar = (texto)=> speechSynthesis
// .speak(new SpeechSynthesisUtterance(texto));
// saludar(texto);


/********Elementos del Documento⬆️********/

// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("menu"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((el) => console.log(el));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelector("#menu li"));
// console.log(document.querySelectorAll("#menu li"));

/******Nodos, Elementos y Selectores⬆️******/

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "en";
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang", "es-MX");
// console.log(document.documentElement.lang);

// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target", "_blank");
// $linkDOM.setAttribute("rel", "noopener");
// $linkDOM.setAttribute("href", "https://www.youtube.com/@franciscoconcepcion4665");
// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.removeAttribute("rel");
// console.log($linkDOM.hasAttribute("rel"));

// //Data-Attributes
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
// console.log($linkDOM.dataset.description);
// $linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.hasAttribute("data-id"));
// $linkDOM.removeAttribute("data-id");
// console.log($linkDOM.hasAttribute("data-id"));

/******Atributos y Data-Attributes⬆️******/

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);
/******Estilos y Variables CSS⬆️******/