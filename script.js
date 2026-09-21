/**
 * PROJEKT ZALICZENIOWY - TECHNOLOGIE WEBOWE
 * Autor: 69Inoi69
 * Temat: Hall of Fame - Biblioteka Gier
 */

const GAMES = {
    fear: {
        title: "F.E.A.R.",
        art: "grafika/gry/fear.jpg",
        meta: ["Horror FPS", "2005", "Monolith Productions"],
        review: "To nie jest zwykła strzelanka. To symulator Johna Wicka, który przypadkiem trafił na plan filmu 'The Ring'. AI przeciwników ma wyższe IQ niż ja podczas sesji egzaminacyjnej – flankują, rzucają granaty i krzyczą. Ale to nieważne, bo Ty masz slow-mo i możesz kopnąć każdego w twarz z półobrotu. Alma to jedyna dziewczyna, która przyprawia mnie o szybsze bicie serca... ze strachu.",
        pros: ["Slow-mo robi brrr", "Można robić wślizgi i kopać z wyskoku (Karate Kid style)", "Sztuczna Inteligencja mądrzejsza od gracza", "Strzelba (Shotgun) robi miazgę"],
        cons: ["Symulator szarych biurowych korytarzy", "Darmowy zawał serca w pakiecie z grą", "Drabiny są śmiertelne"],
        rating: "INTENSE",
        steam: "https://store.steampowered.com/app/21090/FEAR/"
    },
    ds: {
        title: "DARK SOULS: REMASTERED",
        art: "grafika/gry/ds.jpg",
        meta: ["Dark Fantasy RPG", "2011/2018", "FromSoftware"],
        review: "Symulator zarządzania gniewem. Ta gra nauczyła mnie pokory, cierpliwości i dziesięciu nowych przekleństw w ciągu godziny. Wersja Remastered pozwala umierać w płynnych 60 klatkach na sekundę, co jest absolutnie piękne. Fabuła jest jak twoja wiedza na egzaminie – gdzieś tam głęboko jest, ale nikt nie wie gdzie. Pamiętaj: tutaj grawitacja zabija częściej niż bossowie. PRAISE THE SUN!",
        pros: ["Satysfakcja z wygranej (lepsza niż kawa)", "Solaire to najlepszy ziomek (Bro)", "Mapa świata to majstersztyk inżynierii", "\"Git Gud\" jako filozofia życiowa"],
        cons: ["Kamera to najtrudniejszy boss w grze", "Bed of Chaos (kto to projektował?)", "Budżet na nowe pady po rzuceniu starym o ścianę"],
        rating: "PRAISE THE SUN!",
        steam: "https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/"
    },
    soma: {
        title: "SOMA",
        art: "grafika/gry/soma.jpg",
        meta: ["Sci-Fi Horror", "2015", "Frictional Games"],
        review: "Czy jesteś prawdziwy? To nie jest zwykły horror, to 10-godzinny atak paniki egzystencjalnej pod wodą. Wchodzisz do gry, żeby bać się potworów, a wychodzisz bojąc się własnego odbicia w lustrze i tostera w kuchni. Fabuła jest tak gęsta, że rzut monetą (\"coin toss\") będzie ci się śnił po nocach. Simon myśli wolniej niż Internet Explorer, ale historia to absolutne arcydzieło.",
        pros: ["Fabuła ryje bainę (Top Tier)", "Klimat głębin (Thalassophobia w gratisie)", "Zakończenie, o którym myślisz tygodniami", "Catherine to najlepsza AI waifu"],
        cons: ["Symulator chodzenia (czasem nudno)", "Potwory bardziej irytują niż straszą", "Simon Jarret nie jest najostrzejszym ołówkiem"],
        rating: "DEEP AF",
        steam: "https://store.steampowered.com/app/282140/SOMA/"
    },
    neon_white: {
        title: "NEON WHITE",
        art: "grafika/gry/neon_white.jpg",
        meta: ["Speedrun FPS", "2022", "Angel Matrix"],
        review: "Szybciej. Szybciej! To gra dla ludzi z ADHD. Biegniesz, strzelasz, używasz kart jako broni i umiejętności ruchu. Wszystko dzieje się w ułamkach sekund. Dialogi są tak \"cringe\", że aż śmieszne (anime styl), ale rozgrywka to czyste złoto. Uzależnia jak diabli.",
        pros: ["Gameplay Loop (Pętla rozgrywki)", "Muzyka (Machine Girl)", "Poczucie bycia Speedrunnerem"],
        cons: ["Dialogi bolą w zęby", "Fabuła jest bardzo... specyficzna"],
        rating: "GODSPEED BABY",
        steam: "https://store.steampowered.com/app/1533420/Neon_White/"
    },
    hades: {
        title: "HADES",
        art: "grafika/gry/hades.jpg",
        meta: ["Roguelike", "2020", "Supergiant Games"],
        review: "Jeszcze tylko jedna próba... Symulator ucieczki z domu, gdzie twoim ojcem jest bóg podziemi. Umierasz, wracasz, gadasz z ludźmi, ulepszasz broń, umierasz znowu. Każda śmierć popycha fabułę do przodu. Oprawa graficzna jest przepiękna, a wszyscy bogowie są nieprzyzwoicie atrakcyjni.",
        pros: ["Styl graficzny", "System walki", "Dubbing (Voice Acting)"],
        cons: ["Ból kciuków od klepania w pada", "Za bardzo wciąga"],
        rating: "ADDICTING",
        steam: "https://store.steampowered.com/app/1145360/Hades/"
    },
    metro: {
        title: "METRO EXODUS",
        art: "grafika/gry/metro.jpg",
        meta: ["FPS / Survival", "2019", "4A Games"],
        review: "Pociąg do wolności. Wyjeżdżamy z moskiewskiego metra i zwiedzamy postapokaliptyczną Rosję pociągiem Aurora. Grafika topi karty graficzne, a klimat jest tak gęsty, że trzeba go kroić bagnetem. Artem nadal nic nie mówi, co jest trochę dziwne, gdy żona wyznaje mu miłość, ale hej – strzela się wybornie.",
        pros: ["Oprawa wizualna (Ray Tracing)", "Otwarty świat (semi-open)", "Modyfikacja broni w plecaku"],
        cons: ["Milczący bohater", "Animacje twarzy czasem straszą"],
        rating: "CHILL AF",
        steam: "https://store.steampowered.com/app/412020/Metro_Exodus/"
    },
    sh2: {
        title: "SILENT HILL 2",
        art: "grafika/gry/sh2.jpg",
        meta: ["Psychological Horror", "2001/2024", "Konami"],
        review: "We mgle widzę tylko smutek. James Sunderland dostaje list od żony, która nie żyje od trzech lat. Co robi? Jedzie do miasta pełnego potworów. Logiczne, prawda? Ta gra to nie jumpscare'y, to czysta depresja w formie kodu. Piramidogłowy to nie wróg, to metafora twoich niezaliczonych kolosów.",
        pros: ["Klimat gęstszy niż mgła w Krakowie", "Muzyka Akiry Yamaoki (Masterpiece)", "Fabuła, która niszczy psychicznie"],
        cons: ["Sterowanie (w oryginale) to drewno", "Poziom w szpitalu"],
        rating: "FOGGY",
        steam: "https://store.steampowered.com/app/2124490/SILENT_HILL_2/"
    },
    darkwood: {
        title: "DARKWOOD",
        art: "grafika/gry/darkwood.jpg",
        meta: ["Survival Horror", "2017", "Acid Wizard Studio"],
        review: "Szanuj las. Bój się nocy. Polska gra, która udowadnia, że nie potrzebujesz grafiki 3D, żeby narobić w gacie. Widok z góry, brak jumpscare'ów (teoretycznie), a klimat taki, że boisz się wyjść do toalety we własnym domu. Dźwięk w tej grze to absolutne mistrzostwo świata.",
        pros: ["Polski Gamedev górą!", "Udźwiękowienie", "System dnia i nocy"],
        cons: ["Zbyt straszna (serio)", "Wysoki próg wejścia"],
        rating: "SPOOKY",
        steam: "https://store.steampowered.com/app/274520/Darkwood/"
    },
    nv: {
        title: "FALLOUT: New Vegas",
        art: "grafika/gry/nv.jpg",
        meta: ["RPG", "2010", "Obsidian"],
        review: "Patrolowanie Mojave sprawia, że marzysz o nuklearnej zimie. Gra, w której kurier dostaje kulkę w łeb, a potem wstaje i podbija świat. Dialogi to złoto, wybory mają znaczenie, a silnik gry trzyma się na taśmie klejącej i modlitwach. Big Iron on his hip!",
        pros: ["Scenariusz i dialogi", "Swoboda działania", "Soundtrack (Radio New Vegas)"],
        cons: ["Crash to Desktop co 15 minut", "Wygląda jak ziemniak"],
        rating: "BLUE MOON...",
        steam: "https://store.steampowered.com/app/22380/Fallout_New_Vegas/"
    },
    hl1: {
        title: "HALF-LIFE",
        art: "grafika/gry/hl1.jpg",
        meta: ["FPS", "1998", "Valve"],
        review: "Gordon Freeman. Człowiek, który spóźnił się do pracy i przypadkiem wywołał inwazję obcych. Gra, która zdefiniowała gatunek FPS. Brak cutscenek, czysta narracja przez środowisko i łom jako najlepsze narzędzie dyplomacji. Klasyka, którą trzeba znać.",
        pros: ["Rewolucyjna narracja", "Fizyka (jak na tamte czasy)", "Łom (Crowbar)"],
        cons: ["Poziomy Xen (platformówka FPS to błąd)", "Grafika trochę kłuje w oczy w 2025"],
        rating: "CLASSICS",
        steam: "https://store.steampowered.com/app/70/HalfLife/"
    }
};

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

        if (header) {
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }

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
            e.preventDefault();
            const input = this.querySelector('input');
            if(input.value) {
                showNotification(`Dziękujemy! Adres ${input.value} został zapisany.`);
                input.value = '';
            }
        });
    }

    // =========================================================
    // 4. SYMULACJA OTWIERANIA STEAM
    // =========================================================
    document.querySelectorAll('a[href*="store.steampowered.com"]').forEach(link => {
        link.addEventListener('click', () => {
            showNotification(`🚀 Otwieranie sklepu Steam...`);
        });
    });

    // =========================================================
    // 5. PODGLĄD GIER W MODALU (zamiast osobnych podstron)
    // =========================================================
    const modal = document.getElementById('game-modal');
    if (modal) {
        const artEl = document.getElementById('game-modal-art');
        const titleEl = document.getElementById('game-modal-title');
        const metaEl = document.getElementById('game-modal-meta');
        const reviewEl = document.getElementById('game-modal-review');
        const prosEl = document.getElementById('game-modal-pros');
        const consEl = document.getElementById('game-modal-cons');
        const ratingEl = document.getElementById('game-modal-rating');
        const steamEl = document.getElementById('game-modal-steam');
        const closeBtn = document.getElementById('game-modal-close');

        const fillList = (ul, items) => {
            ul.innerHTML = '';
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
        };

        const openGame = (key) => {
            const game = GAMES[key];
            if (!game) return;

            artEl.style.backgroundImage = `url('${game.art}')`;
            titleEl.textContent = game.title;
            metaEl.innerHTML = '';
            game.meta.forEach(m => {
                const span = document.createElement('span');
                span.textContent = m;
                metaEl.appendChild(span);
            });
            reviewEl.textContent = game.review;
            fillList(prosEl, game.pros);
            fillList(consEl, game.cons);
            ratingEl.textContent = game.rating;
            steamEl.href = game.steam;

            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            closeBtn.focus();
        };

        const closeModal = () => {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                openGame(card.dataset.game);
            });
        });

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
        });
    }

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
    
    requestAnimationFrame(() => {
        notification.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}
