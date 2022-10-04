localStorage.setItem("nombre", "patrick");
console.log(localStorage.getItem("nombre"));

localStorage.setItem(
  "persona",
  JSON.stringify({ nombre: "patrick", lastname: "rios" })
);
console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.parse : convierte de string a un objeto
// JSON.stringify : convierte de objeto a string

// sesion storage
sessionStorage.setItem("name", "patrick");

// cookie
document.cookie = "nombreCookie=patrick";
document.cookie =
  "nombreCaducidad=Nombre;expires=" + new Date(2023, 4, 9).toUTCString();
console.log(document.cookie);
