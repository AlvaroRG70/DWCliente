class Aula{
    constructor(alumnos){
        this.alumnos = alumnos
    }
//buscar un alumno del aula por DNI.
    buscarAlumno(dni){
        for (let alumno of this.alumnos){
            if (alumno.dni == dni){
                return alumno
            }
        }

    }

    buscarAlumno2(nombre){
        return this.alumnos.find((alumno)=>alumno.nombre == nombre)
    }

    //ordenar por nota para un alumno en particular
    ordenarNota(nombrealumno){
        let alumno = this.alumnos.find((al)=> al.nombre == nombrealumno)
        let listanotas = [...alumno.notas.values()]
        let notasalumno = listanotas.sort((b, a) => {return a - b})
        return notasalumno
    }

    //ordenar el array de alumnos por apellido
    ordenarApellidos(){
        let apellidosordenados = this.alumnos.sort((a, b) => a.apellido.localeCompare(b.apellido))
        let lista = []
        for (let alumno of apellidosordenados){
            lista.push(alumno.imprimirAlumno())
        }
        return lista
    }

    //imprimir los alumnos de un aula. 

    imprimirAlumnosAula(){
        for (let alumno of this.alumnos){
            document.write(alumno.imprimirAlumno())
        }
    }
}