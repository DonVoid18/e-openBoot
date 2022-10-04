const nombre = "patrick";
const apellidos = "rios";
const obj1 = {
  nombre,
  apellidos,
};

sessionStorage.setItem("obj1", JSON.stringify(obj1));
localStorage.setItem("obj1", JSON.stringify(obj1));
document.cookie = `ridfgdos=${apellidos};expires=${new Date(
  2022,
  9,
  3,
  19,
  44
).toUTCString()}`;
