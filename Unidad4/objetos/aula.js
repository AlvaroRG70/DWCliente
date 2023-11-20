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

    buscarAlumno2(dni){
        return this.alumnos.find((alumno)=>alumno.dni == dni)
    }

    //ordenar por nota para un alumno en particular
    ordenarNota(alumnoobj){
        let alumno = this.alumnos.find((al)=> al.nombre == alumnoobj)
        let notasalumno = []
        for (let nota of alumno.notas.values){
            notasalumno.push(nota)
        }
        let notasordenadas = notasalumno.sort((a, b) => a.localeCompare(b))
        return notasordenadas
    }

    //ordenar el array de alumnos por apellido
    ordenarApellidos(){
        let apellidosordenados = this.alumnos.sort((a, b) => a.apellido.localeCompare(b.apellido))
        return apellidosordenados
    }

    //imprimir los alumnos de un aula. 

    imprimirAlumnosAula(){
        for (let alumno of alumnos){
            document.write(alumno.imprimirAlumno())
        }
    }
}