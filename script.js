/**
 * PROJEKT ZALICZENIOWY - TECHNOLOGIE WEBOWE
 * Autor: Oleksandr Lysiuk
 * Temat: Hall of Fame - Biblioteka Gier
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================
    // 0. EFEKT PISANIA NA STRONIE GŁÓWNEJ (Intro Typing Effect)
    // =========================================================
    const introElement = document.getElementById('intro-text');
    if (introElement) {
        const textToType = "System gotowy. Wczytywanie najlepszej dziesiątki gier według mnie...";
        let index = 0;

        function typeWriter() {
            if (index < textToType.length) {
                introElement.innerHTML += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, 50); 
            }
        }
        setTimeout(typeWriter, 500);
    }

    // =========================================================
    // 1. KOT SCHRÖDINGERA (Easter Egg)
    // =========================================================
    const cat = document.getElementById('quantum-cat');
    if (cat) {
        const teleportCat = () => {
            // Ograniczenie obszaru, aby kot nie uciekł poza ekran
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            
            cat.style.left = `${x}px`;
            cat.style.top = `${y}px`;
        };

        cat.addEventListener('mouseover', teleportCat);
        cat.addEventListener('click', teleportCat);
    }

    // =========================================================
    // 2. OBSŁUGA NAGŁÓWKA I PRZYCISKU "DO GÓRY"
    // =========================================================
    const header = document.querySelector('.launcher-header');
    const backToTopBtn = document.getElementById('back-to-top');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Ukrywanie nagłówka podczas przewijania w dół
        if (header) {
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }

        // Przycisk powrotu do góry
        if (backToTopBtn) {
            if (currentScrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }

        lastScrollY = currentScrollY;
    });

    if(backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =========================================================
    // 3. OBSŁUGA FORMULARZA NEWSLETTERA (Wymagane przez projekt)
    // =========================================================
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Zatrzymaj przeładowanie strony
            const input = this.querySelector('input');
            if(input.value) {
                showNotification(`Dziękujemy! Adres ${input.value} został zapisany.`);
                input.value = ''; // Wyczyść pole
            }
        });
    }

    // =========================================================
    // 4. SYMULACJA OTWIERANIA STEAM
    // =========================================================
    const allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Ignoruj linki nawigacyjne
            if (link.classList.contains('header-steam-link') || link.classList.contains('btn-steam-hero')) {
                return; 
            }

            // Jeśli link prowadzi do sklepu Steam
            if (link.href.includes('store.steampowered.com')) {
                showNotification(`🚀 Otwieranie sklepu Steam...`);
            }
        });
    });

    // Scroll-down button -> smooth scroll to the first tier section
    const scrollBtn = document.querySelector('.scroll-down');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            const nextSection = document.querySelector('.tier-box');
            const headerHeight = document.querySelector('.launcher-header')?.offsetHeight || 0;
            if (nextSection) {
                const targetY = nextSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top: targetY, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: 'smooth' });
            }
        });
    }
});

// Funkcja wyświetlająca powiadomienia (Toast)
function showNotification(text) {
    const notification = document.createElement('div');
    notification.innerText = text;
    Object.assign(notification.style, {
        position: 'fixed', bottom: '20px', right: '20px',
        background: '#1a1a1a', color: '#fff', padding: '15px 25px',
        borderLeft: '4px solid #00ff88', zIndex: '10000',
        transform: 'translateY(100px)', transition: 'transform 0.3s ease',
        boxShadow: '0 5px 15px rgba(0,0,0,0.5)', 
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 'bold',
        borderRadius: '4px'
    });
    document.body.appendChild(notification);
    
    // Animacja wejścia
    requestAnimationFrame(() => {
        notification.style.transform = 'translateY(0)';
    });

    // Usunięcie po 3 sekundach
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}