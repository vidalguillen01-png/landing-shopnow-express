const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  const abierto = navMenu.classList.toggle("abierto");
  menuToggle.setAttribute("aria-expanded", abierto);
});

const form = document.getElementById("form-contacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");

const passwordPattern = /^(?=.*[A-Z]).{8,}$/;

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (nombre.value.trim() === "") {
    mostrarMensaje("Por favor ingresa tu nombre.", "error");
    return;
  }

  if (correo.value.trim() === "") {
    mostrarMensaje("Por favor ingresa tu correo electrónico.", "error");
    return;
  }

  if (!passwordPattern.test(password.value)) {
    mostrarMensaje("La contraseña debe tener mínimo 8 caracteres y una mayúscula.", "error");
    return;
  }

  mostrarMensaje("¡Registro exitoso! Gracias por unirte a ShopNow Express.", "exito");
  form.reset();
});

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = tipo;
}