// manejo de errores
const miFunction = (val) => {
  if (typeof val !== "number") throw new Error("String not found");
  return 2 * val;
};

try {
  console.log("Ejercuasidjofjsi");
  const doble = miFunction("2");
  console.log(doble);
} catch (error) {
  console.log("ERROR!");
  console.log(`${error}`);
} finally {
  console.log("Siempre se ejecuta");
}
