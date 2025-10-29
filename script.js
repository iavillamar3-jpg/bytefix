// Importa EmailJS desde el CDN
(function(){
  emailjs.init("q8xBa-FPpAg2PhjL6");
})();

// Escucha el envío del formulario
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contant-us-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_fwl2qpl", "template_bdorrtf", this)
      .then(() => {
        alert("✅ ¡Mensaje enviado con éxito! Gracias por contactarnos.");
        form.reset(); // limpia el formulario
      })
      .catch((error) => {
        console.error("❌ Error:", error);
        alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
      });
  });
});
