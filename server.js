const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      message.style.color = "green";
      message.textContent = data.message;
    } else {
      message.style.color = "red";
      message.textContent = data.message || "Correo o clave incorrectos.";
    }
  } catch (error) {
    message.style.color = "red";
    message.textContent = "Error de conexión con el servidor.";
  }
});