document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "A tu lado todo es más bonito",
        "Si mi corazón fuera un algoritmo, tu serías el valor más importante",
        "No hay nada más bonito que despertar cada mañana sabiendo que te tengo a ti a mi lado",
        "Tu amor es lo más hermoso que me ha pasado, y por eso te prometo cuidarlo siempre",
        "Te amo más de lo que las palabras pueden expresar, y aún así seguiré buscando formas de decírtelo",
        "No sé qué es más irresistible, tu sonrisa o tus labios",
        "Me vuelves loca... y no quiero que se me pase",
        "Solo tú sabes cómo desarmarme con una sonrisa",
        "Eres mi debilidad, y me encanta"
    ];

    const cloudContainer = document.getElementById('cloud-container');
    const heartsContainer = document.getElementById('hearts-container');

    // Crear las nubecitas con efecto de caída
    phrases.forEach((phrase, index) => {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.textContent = phrase;
        cloud.style.animationDelay = `${index * 5}s`; // Cada frase aparece con un retraso
        cloud.style.left = `${Math.random() * 80 + 10}%`; // Posición aleatoria en X
        cloudContainer.appendChild(cloud);
    });

    // Función para generar corazones cayendo aleatorios
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}%`; // Posición aleatoria en X
        heart.style.animationDuration = `${Math.random() * 3 + 4}s`; // Duración aleatoria
        heartsContainer.appendChild(heart);

        // Eliminar el corazón después de que caiga
        setTimeout(() => heart.remove(), 7000);
    }, 500); // Un corazón nuevo cada 500ms
});
