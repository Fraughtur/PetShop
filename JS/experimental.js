// metodo 2 para hacer contraseña, esta vez
// hecha por Kandbull
//bueno este no lo hice yo, lo busqué  ʕ º ᴥ ºʔ

function verificarContraseña(){

// Ontenemos los valores de los campos de contraseñas 
pass1 = document.getElementById('pass1');
pass2 = document.getElementById('pass2');


// Verificamos si las constraseñas no coinciden
if (pass1.value != pass2.value) {

  // Si las constraseñas no coinciden mostramos un mensaje
  document.getElementById("error").classList.add("mostrar");

  return false;
}

else {

  // Si las contraseñas coinciden ocultamos el mensaje de error
  document.getElementById("error").classList.remove("mostrar");

  // Mostramos un mensaje mencionando que las Contraseñas coinciden
  document.getElementById("ok").classList.remove("ocultar");

  // Desabilitamos el botón de login
  document.getElementById("login").disabled = true;

  // Refrescamos la página (Simulación de envío del formulario)
  setTimeout(function() {
  location.reload();
  }, 3000);

  return true;
}




}










//formMain.addEventListener("submit", (e) => { // Escuchar cuando se envíe el formulario
//if (pass1.value !== pass2.value) { // Comprobar si los valores de los inputs son iguales, si no lo son continuar
  //e.preventDefault(); // Prevenir que la página se recargue
  //err.innerHTML = "Las contraseñas no coinciden"; // Notificar al usuario
  //setTimeout(() => {
  //  err.innerHTML = " ";
//  }, 1200); // Esperar 1.2 segundos y quitar el mensaje
//}
//});
