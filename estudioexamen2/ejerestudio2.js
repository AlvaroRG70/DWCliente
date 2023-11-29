let solicitarNombreUsuario = () => {
    let nombreUsuario = prompt("Introduce un nombre de usuario con exactamente 7 caracteres:");
  
    while (nombreUsuario.length !== 7) {
      alert("El nombre de usuario debe tener exactamente 7 caracteres.");
      solicitarNombreUsuario();
    }
  
    const numeroDigitos = nombreUsuario.length;
    let contadorPopups = 0;
  
    const intervalo = setInterval(() => {
      if (contadorPopups < numeroDigitos) {
        const mensaje = `Hola ${nombreUsuario}. Aquí tienes el producto del año. Atrévete a probarlo!!`;
        const ventanaAncho = 400;
        const ventanaAlto = 100;
        const posicionX = window.screen.availWidth - ventanaAncho;
        const posicionY = window.screen.availHeight - ventanaAlto;
        const popup = window.open('', '', 'width=400,height=300,left=2000,top=1000');
        popup.document.write(mensaje);
        contadorPopups++;
      } else {
        clearInterval(intervalo);
      }
    }, 5000);
  }


  solicitarNombreUsuario()