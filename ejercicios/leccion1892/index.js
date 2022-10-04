const nombre = "patrick";
const apellidos = "rios";
const obj1 = {
  nombre,
  apellidos,
};

sessionStorage.setItem("obj1", JSON.stringify(obj1));
localStorage.setItem("obj1", JSON.stringify(obj1));
document.cookie = `nombre=${nombre};expires=${new Date(
  2023,
  4,
  9,
  19,
  39
).toUTCString()}`;
