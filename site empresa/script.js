document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("Mensagem enviada com sucesso!");
            // Aqui você pode adicionar o código para enviar o formulário ao servidor
            contactForm.reset(); // Limpar o formulário após o envio
        }
    });
});
