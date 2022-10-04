const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const eliminar = document.getElementById("eliminar");
parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    console.log("Estoy arrastrando el parrafo " + parrafo.innerText);
    parrafo.classList.add("dragging");
    const elemento_fantasma = document.querySelector(".imagen-fantasma");
    event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
    event.dataTransfer.setData("id", parrafo.id);
  });
  parrafo.addEventListener("dragend", () => {
    console.log("he terminado de arrastrar");
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("Drag Over");
  });
  seccion.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    // console.log("Parrafo id: " + id_parrafo);
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});
eliminar.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  console.log("a punto de eliminar");
});
eliminar.addEventListener("drop", (event) => {
  console.log("eliminado");
  const id_parrafo = event.dataTransfer.getData("id");
  const parrafo = document.getElementById(id_parrafo);
  eliminar.appendChild(parrafo);
  eliminar.removeChild(parrafo);
});
