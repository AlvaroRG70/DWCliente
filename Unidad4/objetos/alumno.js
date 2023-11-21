
class Alumno extends Persona{
    constructor(nombre,apellido,dni,fechanac,curso, notas){
        super(nombre,apellido,dni,fechanac)
        this.curso = curso
        this.notas = notas
    }
    imprimirAlumno(){

        var misnotas = ""
        this.notas.forEach((value, key) => {
            misnotas += key + "=" + value + "<br>"
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
        for (let nota of this.notas.values()){
            let listamayores = []
            if (mayornota == nota){
                let asignatura = this.notas.keys()
                listamayores.push(asignatura)
            }
        }
        return listamayores
    }
}

 