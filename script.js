document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let feedback = document.getElementById('feedback');

    if (name === '' || email === '' || message === '') {
        feedback.textContent = "Por favor, preencha todos os campos.";
        feedback.style.color = "red";
    } else if (!email.includes('@')) {
        feedback.textContent = "Insira um e-mail válido.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Mensagem enviada com sucesso!";
        feedback.style.color = "green";
        this.reset();
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
