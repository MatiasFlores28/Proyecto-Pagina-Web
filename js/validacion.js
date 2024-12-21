document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario si hay errores
  
    // Limpiar errores previos
    document.querySelectorAll(".error").forEach(function (error) {
      error.textContent = "";
    });
  
    let esValido = true;
  
    // Validar el nombre
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
      esValido = false;
      document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
    }
  
    // Validar el email
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      esValido = false;
      document.getElementById("errorEmail").textContent = "Introduce un email válido.";
    }
  
    // Validar la contraseña
    const password = document.getElementById("password").value.trim();
    if (password.length < 6) {
      esValido = false;
      document.getElementById("errorPassword").textContent = "La contraseña debe tener al menos 6 caracteres.";
    }
  
    // Si todo es válido, enviar el formulario
    if (esValido) {
      alert("Formulario enviado correctamente");
      // Aquí puedes enviar el formulario, por ejemplo, con fetch()
      this.submit();
    }
  });
  