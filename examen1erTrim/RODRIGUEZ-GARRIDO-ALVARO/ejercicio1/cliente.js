class Cliente{
    constructor(nombre, apellido, dni, listapendientes, listahistorial){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.listapendientes = listapendientes
        this.listahistorial = listahistorial
    }

    crearCita(cita){
        let fechahoy = new Date()
        if (fechahoy <= cita.fechahora){
            this.listapendientes.push(cita)
            return this.listapendientes
        } else {
            document.write("La fecha no puede ser anterior a la actual")
        }
    }

    Recordatorio(){
        
        let hora = new Date()
        let pendientes = this.listapendientes
        let citaspasadas = setInterval(()=>{
            for (citap of pendientes){
                if (citap.fechahora < hora ){
                    this.listahistorial.push(cita)
                    let listaeliminado = pendientes.filter((cit) => cit != cita)
                    this.listapendientes = listaeliminado
                }
            }
        }, 60000)
        
        let contador = 0

        let recordar = setInterval(() => {
            if (contador < 3) {
                for (let cita of pendientes){
                    let mensaje = cita.mostrarCita()
                    let popup = window.open('', '', 'width=400,height=300');
                    popup.document.write(mensaje)
                }
                contador++
            } else {
              clearInterval(recordar)
            }
          }, 5000)
    }
}