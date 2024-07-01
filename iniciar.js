
// Función para validar un correo electrónico
function validarCorreoElectronico(correo) {
  // Expresión regular para validar el formato de un correo electrónico
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
  return regex.test(correo);
}

// Función para manejar el estado del botón de registro
function manejarInicioSesion() {
  // Agregar un event listener para el evento del envío del formulario
  const formulario = document.getElementById('login');
   
  formulario.addEventListener('submit', iniciarSesion);
}

// Function para iniciar sesión
function iniciarSesion(event) {
  // Seleccionar el checkbox
  const checkbox = document.getElementById('checkbox');
  // Seleccionar el campo de correo electrónico
  const correoInput = document.getElementById('email');
  const correo = correoInput.value;

  // Verificar si el correo electrónico es válido
  // if (!validarCorreoElectronico(correo)) {
  //     // Mostrar un mensaje si el correo electrónico no es válido
  //     alert("Por favor, introduce un correo electrónico válido.");
  //     // prevenir(avsr) el envio del formulario
  //     event.preventDefault();
  //     return;
  // }

  // Verificar si el checkbox está marcado
  if (checkbox.checked) {
       
      // Mostrar mensaje si el checkbox está marcado
      alert("Gracias por aceptar los condiciones de uso");
  } else {
      // Mostrar un mensaje si el checkbox no está marcado
      alert("Por favor, acepta las condiciones para iniciar sesión.");
      // Prevenir el envío del formulario por defecto
      event.preventDefault();
      return; // Detener la ejecución de la función aquí
  }

}
// Llamar a la función para que se ejecute cuando se carga la página 
document.addEventListener('DOMContentLoaded',manejarInicioSesion);

// hd satr kay9alb 3la l3osaanr li 3ando id 'toggle-password' O
// addEvent... a fhad satar kaydif(agrega) lina evento(mostami3-escuchador)l3onsor li lgina bi id o 
// kaystama3 na9ra dyal raton bach ydir lina fuction mnin kayw9a3 hadchi 

document.getElementById('ojo-password').addEventListener('click', function () {

  const passwordField = document.getElementById('password');//had satar kay9alab lina 3la 3osaorcon el id password o had l3osor howa input tyoe password

  const passwordFieldType = passwordField.getAttribute('type');//hna kayhsal 3la l9ima dyal lkhasya(atributo) type l input password, had lkhasya 
 // kat3ni ila kan l input mghati(oculto actualmente) hadci kay3ni bali rah password,o ila kan mar2i hadchi kayni bali rah text
  
  if (passwordFieldType === 'password') { //ila kant contraseña makhfya  had satar kayhawlol text bach katwali contraseña mar2ia fi input
      passwordField.setAttribute('type', 'text');
      this.textContent = '\uD83E\uDEE3'; // Cambia el ícono dyal l3oor li ghantokiwh(click)
  } else {
      passwordField.setAttribute('type', 'password');//wila kan input mr2ia had satr kayhawlo l password bax katkhtafi mara taia
      this.textContent = '\u{1F917}'; // Cambia el ícono es lo mismo que ejemplo del mono
  }
});

//\uD83E\uDEE3 emogi
