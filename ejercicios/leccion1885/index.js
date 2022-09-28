// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

// - Registra el error en un archivo a través de un try...catch
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

const sumar = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number")
    throw new "Error not is number"();
  return a + b;
};

try {
  let resp = sumar("adsf", 2);
  console.log(resp);
} catch (error) {
  logger.error(`${error}`);
}
