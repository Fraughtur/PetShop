// metodo 2 para hacer contraseña, esta vez
// hecha por Kandbull
//bueno este no lo hice yo, lo busqué  ʕ º ᴥ ºʔ

formMain.addEventListener("submit", (e) => { // Escuchar cuando se envíe el formulario
    if (pass1.value !== pass2.value) { // Comprobar si los valores de los inputs son iguales, si no lo son continuar
      e.preventDefault(); // Prevenir que la página se recargue
      err.innerHTML = "Las contraseñas no coinciden"; // Notificar al usuario
      setTimeout(() => {
        err.innerHTML = " ";
      }, 1200); // Esperar 1.2 segundos y quitar el mensaje
    }
  });


