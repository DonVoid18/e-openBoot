//  funciones asíncronas
function miAsinc() {
  //hace una llamada a una base datos
}

const miPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});

miPromesa
  .then(() => console.log("Se resuelve correctamente"))
  .catch(() => console.log("No se resolvió"))
  .finally(() => console.log("se ejecuta siempre"));
