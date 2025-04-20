document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('mouseover', function () {
        const previousSibling = this.parentElement.previousElementSibling;
        if (previousSibling) {
            const previousLink = previousSibling.querySelector('a');
            if (previousLink && previousLink.id === 'voltar') {
                previousLink.style.backgroundColor = 'transparent';
                previousLink.style.color = 'var(--color-white)';
            }
        }
    });

    link.addEventListener('mouseout', function () {
        const previousSibling = this.parentElement.previousElementSibling;
        if (previousSibling) {
            const previousLink = previousSibling.querySelector('a');
            if (previousLink && previousLink.id === 'voltar') {
                previousLink.style.backgroundColor = 'var(--color-white)';
                previousLink.style.color = 'var(--color-black)';
            }
        }
    });
});

// Função para criar o efeito de digitação
function typeWriterEffect(element, text, speed) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index); // Adiciona uma letra por vez
            index++;
            setTimeout(type, speed); // Chama a função novamente após o intervalo
        }
    }

    type();
}

// Seleciona o elemento <h1>
const targetElement = document.querySelector('h1');

// Texto que será exibido letra por letra
const text = "Certificados Presenciais";

// Velocidade do efeito (em milissegundos)
const speed = 100; // 100ms entre cada letra

// Inicia o efeito
typeWriterEffect(targetElement, text, speed);