document.addEventListener("DOMContentLoaded", function() {
    const maxScroll = 3 * window.innerHeight; // 300vh
    const heroScreen = document.querySelector('.hero_screen');

    window.addEventListener("scroll", function() {
        // Berechnen der Scroll-Position
        const scrollPos = window.scrollY;
        
        // Verhindern, dass man über 300vh scrollt
        if (scrollPos > maxScroll) {
            window.scrollTo({
                top: maxScroll,
                behavior: 'smooth'
            });
        }

        // Parallax-Effekt nur für die Hero-Sektion anwenden
        if (scrollPos <= maxScroll) {
            let parallaxSpeed = scrollPos / 10; // Geschwindigkeit anpassen
            heroScreen.style.transform = `translateY(${parallaxSpeed}px)`;
        }
    });
});