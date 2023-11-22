
class Alumno extends Persona{
    constructor(nombre,apellido,dni,fechanac,curso, notas){
        super(nombre,apellido,dni,fechanac)
        this.curso = curso
        this.notas = notas
    }
    imprimirAlumno(){

        var misnotas = ""
        this.notas.forEach((value, key) => {
            misnotas += key + "=" + value + ", "
        });
        let cadena = this.nombre + " " + this.apellido + " " + this.dni + " " + this.fechanac + " " + this.curso + " " + misnotas
        return cadena
    }
  
    notaMedia(){
        let contador = 0
        let sumanotas = 0
        let notaslista = [...this.notas.values()]

        for (let nota of notaslista){
            sumanotas += nota
            contador += 1
        }
        let media = sumanotas/contador
        return media
    }

    notaMaxima(){

        let listanotas = [...this.notas.values()]
        let mayornota = Math.max(...listanotas)
        let listamayores = []
        for (let [asignatura, nota] of this.notas){
            console.log(asignatura)
            if (mayornota == nota){
                listamayores.push(asignatura)
            }
        }
        return listamayores
    }
}

 