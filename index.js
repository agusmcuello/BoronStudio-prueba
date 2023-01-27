/*Funciones*/

/*Funciones que se disparan al scrollear, cambia la clase de un elemento para que se muestre en pantalla*/
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("scrolling", window.scrollY > 0);
});
window.addEventListener("scroll", function () {
  var nav = document.querySelector("div");
  nav.classList.toggle("available", window.scrollY > 0);
});

/*Funciones para abrir y cerrar el Navbar*/
function openNavBar() {
  var navbar = document.getElementById("aside");
  navbar.style.display = "block";
}
function closeNavBar() {
  var navbar = document.getElementById("aside");
  navbar.style.display = "none";
}

/*Lógica slider*/
const moveRight = () => {
  const slices = document.querySelector(".slices");
  slices.style.transform = `translateX(-54%)`;
};
const moveLeft = () => {
  const slices = document.querySelector(".slices");
  slices.style.transform = `translateX(0%)`;
};

/*Funciones para los hover del Módulo Repositorio */
const showAuthorImage = () => {
  const image = document.getElementById("author");
  image.style.display = "block";
};
const removeAuthorImage = () => {
  const image = document.getElementById("author");
  image.style.display = "none";
};
const showTitleImage = () => {
  const image = document.getElementById("title");
  image.style.display = "block";
};
const removeTitleImage = () => {
  const image = document.getElementById("title");
  image.style.display = "none";
};

const showNavegationImage = () => {
  const image = document.getElementById("navegation");
  image.style.display = "block";
};
const removeNavegationImage = () => {
  const image = document.getElementById("navegation");
  image.style.display = "none";
};

const showDescriptionImage = () => {
  const image = document.getElementById("description");
  image.style.display = "block";
};
const removeDescriptionImage = () => {
  const image = document.getElementById("description");
  image.style.display = "none";
};

/*Funciones para los hover del Módulo Novedades */
const showFirstImage = () => {
  const image = document.querySelector("#image1");
  image.style.display = "block";
};
const removeFirstImage = () => {
  const image = document.querySelector("#image1");
  image.style.display = "none";
};

const showSecondImage = () => {
  const image = document.querySelector("#image2");
  image.style.display = "block";
};
const removeSecondImage = () => {
  const image = document.querySelector("#image2");
  image.style.display = "none";
};
const showThirdImage = () => {
  const image = document.querySelector("#image3");
  image.style.display = "block";
};
const removeThirdImage = () => {
  const image = document.querySelector("#image3");
  image.style.display = "none";
};
const showFourImage = () => {
  const image = document.querySelector("#image4");
  image.style.display = "block";
};
const removeFourImage = () => {
  const image = document.querySelector("#image4");
  image.style.display = "none";
};
