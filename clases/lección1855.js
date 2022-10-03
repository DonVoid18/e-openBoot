// inheritante - herencia
class Persona {
  // private -> #
  // private: Solo se puede acceder desde la misma clase
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  // protected -> _
  // solo se puede acceder dentro de la clase y desde clases decendientes
  _isDeveloper = true;

  saludo() {
    console.log(`Hi my name is ${this.#nombre} and have ${this.#edad} years`);
  }
  obtenerNombre() {
    console.log(this.#nombre);
  }
  #obtenEdad() {
    return this.#edad;
  }
  getEdad() {
    return this.#edad;
  }
  setEdad(value) {
    this.#edad = value;
  }
}

class Develop extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }
  // override
  saludo() {
    super.saludo();
    console.log(`Y mi lenguaje favorito es ${this.lenguaje}`);
  }
}
const nuevoDev = new Develop("Patrick", 18, "javascript");

nuevoDev.saludo();
// poliformismo
