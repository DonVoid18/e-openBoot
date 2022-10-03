class Estudiante{
  nombre
  asignaturas=["javascript", "html", "css"]
  obtenDatos(){
    return {nombre: this.nombre, asignaturas: this.asignaturas}
  }
}

const al1 = new Estudiante()
al1.nombre = "angelo patrick"
console.log(al1.obtenDatos())