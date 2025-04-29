// Form submission handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;

      // Simple validation
      if (!nombre || !email || !mensaje) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Here you would typically send the data to a server
      // For this example, we'll just show a success message
      alert(`¡Gracias por contactarnos, ${nombre}! Te responderemos pronto.`);

      // Reset the form
      contactForm.reset();
    });
  }

  // Add click event to buy buttons
  const buyButtons = document.querySelectorAll(".buy-button");

  buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get product information
      const productCard = this.closest(".product-card");
      const productTitle = productCard.querySelector("h3").textContent;

      alert(
        `Has agregado "${productTitle}" a tu carrito. Esta funcionalidad estará disponible pronto.`
      );
    });
  });
});
