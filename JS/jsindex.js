//Contraseña
 document
  .getElementById('contrasena')
  .addEventListener('input', function(evt) {
    const contrasena = evt.target,
          valido = document.getElementById('contrasenaOK'),
        
          alfanum = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

    //Se muestra un texto válido/inválido a modo de ejemplo
    if (alfanum.test(contrasena.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }
  });