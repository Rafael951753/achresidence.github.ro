// ================= CONFIGURĂRI GLOBALE =================

function toggleMobileMenu() {
    // Selectăm Navbar-ul (bara de sus)
    const navbar = document.querySelector('.navbar');
    // Selectăm Lista de link-uri
    const navLinks = document.querySelector('.nav-links');

    // Comutăm clasele
    navbar.classList.toggle('menu-open'); // Asta face bara neagră
    navLinks.classList.toggle('active');  // Asta arată meniul
}
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQ62WXQunmrqvjm52bObiDmAVhPK7IdmgaSlcYnUt-NfGLn1iKL70493pOo7DnZ--S/exec';
const translations = {
    ro: {
        // --- Navbar & Hero ---
        home: "Acasă", about: "Despre noi", activities: "Activități", contact: "Contact", reserve: "Rezervă acum",
        hero_title: "Bine ai venit", hero_subtitle: "Descoperă locația noastră unică",

        gallery:"Galerie foto",
        gallery_title:"Galerie foto",
        gallery_subtitle:"Cateva poze din locatia noastra",

        // --- ABOUT SECTION (Gheorghe Doja) ---
        about_loc_subtitle: "Gheorghe Doja, Bacău",
        about_main_title: "Locul unde distracția se simte ca acasă",
        about_desc_1: "La noi, conceptul este simplu: <strong>tu aduci gașca, noi aducem locația.</strong> Situată în zona liniștită din Gheorghe Doja, vila noastră este complet echipată pentru a găzdui atât petreceri memorabile, cât și zile de relaxare totală.",
        about_desc_2: "Nu ești la un hotel pretențios, ești la o cabană unde poți râde zgomotos. Am amenajat totul gândindu-ne la confortul grupului tău.",
        feat_capacity: "Capacitate mare", feat_hottub: "Ciubăr încălzit", feat_bbq_zone: "Zonă de grătar",
        feat_audio: "Sistem Audio", feat_neighbors: "Fără vecini apropiați", feat_kitchen: "Bucătărie utilată",
        feat_grill: "Grătar", feat_pingpong: "Masă de ping pong",

        // --- ACTIVITIES SECTION ---
        act_tub_title: "Ciubăr",
        act_tub_desc: "O baie fierbinte sub cerul liber este rețeta perfectă pentru relaxare totală. Apa caldă te va face să uiți de grijile cotidiene, oferindu-ți un moment de liniște absolută în mijlocul naturii.",
        act_cauldron_title: "Ceaun Tradițional",
        act_cauldron_desc: "Gustul mâncării gătite lent la foc de lemne este inconfundabil. Pregătește cele mai delicioase rețete tradiționale în aer liber. Fumul, aromele și compania celor dragi transformă gătitul într-o experiență memorabilă.",
        act_pingpong_title: "Masă de Ping-Pong",
        act_pingpong_desc: "Ești gata de competiție? Organizează un campionat cu prietenii și bucură-te de mișcare și distracție. Masa noastră profesională este pregătită pentru meciuri intense și multe râsete.",
        act_bbq_title: "Zona de Grătar",
        act_bbq_desc: "Nicio ieșire la cabană nu e completă fără un grătar încins. Spațiul este echipat complet cu ustensile și lemne, astfel încât tu doar să aduci ingredientele preferate și voia bună.",
        act_music_title: "Muzică și Petrecere",
        act_music_desc: "Dă volumul mai tare! Sistemul nostru audio performant este pregătit să țină ritmul petrecerii până în zori. Creează playlist-ul perfect și bucură-te de o atmosferă vibrantă.",

        // --- CONTACT DETAILS SECTION (NOU ADĂUGAT) ---
        contact_main_heading: "Suntem la un mesaj distanță",
        contact_phone_title: "Telefon",
        contact_phone_desc: "Suntem disponibili pentru tine.",
        contact_wa_title: "WhatsApp",
        contact_wa_desc: "Scrie-ne rapid un mesaj.",
        contact_wa_btn: "Deschide Chat",
        contact_email_title: "Email",
        contact_email_desc: "Pentru oferte și detalii.",

        // --- Info Section ---
        about_title: "Despre noi", about_subtitle: "Afla cateva lucruri despre locatia noastra",
        activities_title: "Activitatile noastre", activities_subtitle: "Nenumarate moduri de a te relaxa si distra",
        info_title: "Experiența Ach Residence",
        info_desc: "Fie că plănuiești o petrecere legendară sau cauți un refugiu liniștit pentru a te deconecta de agitația urbană, locația noastră se transformă după nevoile tale. Îți oferim cadrul perfect unde amintirile prind viață, într-un decor modern și primitor.",
        feat_party_title: "Petreceri Private", feat_party_desc: "Sistem audio performant, lumini ambientale și spațiu generos pentru dans.",
        feat_relax_title: "Relaxare", feat_relax_desc: "Zonă de lounge, ciubăr și liniște deplină în mijlocul naturii.",
        feat_comfort_title: "Confort Premium", feat_comfort_desc: "Camere spațioase și moderne pentru odihna de după eveniment.",

        // --- Stats ---
        stats_years: "Ani de Activitate", stats_clients: "Clienți Mulțumiți", stats_birthdays: "Zile de Naștere",

        // --- Reviews ---
        reviews_title: "Ce spun oaspeții noștri", reviews_subtitle: "Părerile celor care ne-au trecut pragul sunt cartea noastră de vizită.",
        review_1_text: '"Am organizat majoratul fiicei mele aici și a fost totul la superlativ! Sistemul de sunet este genial, nu am deranjat pe nimeni, iar vila este foarte spațioasă."', review_1_tag: "Petrecere Privată",
        review_2_text: '"O oază de liniște. Am venit pentru un weekend de relaxare cu prietenii. Ciubărul a fost atracția principală, iar curățenia exemplară. Vom reveni!"', review_2_tag: "Relaxare",
        review_3_text: '"Gazde foarte primitoare și o locație modernă. Ne-a plăcut faptul că am avut intimitate totală. Ne-am simțit exact ca acasă, dar mult mai răsfățați."', review_3_tag: "Teambuilding",
        review_4_text: '"Am petrecut Crăciunul aici cu toată familia. Livingul imens ne-a permis să stăm toți la masă, iar atmosfera a fost magică."', review_4_tag: "Vacanță Familie",
        review_5_text: '"Locația arată exact ca în poze, poate chiar mai bine. Echipată cu absolut tot ce ai nevoie. Recomand pentru curățenie și seriozitate."', review_5_tag: "Cuplu",

        // --- CTA & Contact Footer ---
        cta_title: "Ti-am atras atentia?", cta_text: "Evadează din cotidian și lasă-te învăluit de liniștea rurală. Te așteptăm cu experiențe autentice, confort deplin și amintiri care abia așteaptă să fie create.", cta_btn: "REZERVĂ ACUM",
        contact_title: "Contact", contact_subtitle: "Descoperă cum ne poți contacta",
        booking_title: "Rezervă acum", booking_subtitle: "Alege perioada dorită și fă primul pas către o vacanță de neuitat",

        // --- Footer ---
        footer_desc: "Tu aduci gașca noi aducem locatia.", footer_social_title: "Ne găsești și în social media", footer_menu_title: "Meniu Rapid", footer_map_title: "Unde ne aflăm?", footer_rights: "© 2026 Achresidence. Toate drepturile rezervate."
    },
    en: {
        // --- Navbar & Hero ---
        home: "Home", about: "About Us", activities: "Activities", contact: "Contact", reserve: "Book Now",
        hero_title: "Welcome", hero_subtitle: "Discover our unique location",
gallery:"Foto gallery",
gallery_title:"Foto gallery",
gallery_subtitle:"Some photo from our location",
        // --- ABOUT SECTION ---
        about_loc_subtitle: "Gheorghe Doja, Bacău",
        about_main_title: "The place where fun feels like home",
        about_desc_1: "Here, the concept is simple: <strong>you bring the squad, we bring the location.</strong> Located in the quiet area of Gheorghe Doja, our villa is fully equipped to host both memorable parties and days of total relaxation.",
        about_desc_2: "You are not at a pretentious hotel, you are at a cabin where you can laugh out loud. We arranged everything with your group's comfort in mind.",
        feat_capacity: "Large Capacity", feat_hottub: "Heated Hot Tub", feat_bbq_zone: "BBQ Area",
        feat_audio: "Audio System", feat_neighbors: "No Close Neighbors", feat_kitchen: "Fully Equipped Kitchen",
        feat_grill: "Grill", feat_pingpong: "Ping Pong Table",

        // --- ACTIVITIES SECTION ---
        act_tub_title: "Hot Tub",
        act_tub_desc: "A hot bath under the open sky is the perfect recipe for total relaxation. The warm water will make you forget daily worries, offering you a moment of absolute peace in the middle of nature.",
        act_cauldron_title: "Traditional Cauldron",
        act_cauldron_desc: "The taste of food cooked slowly over a wood fire is unmistakable. Prepare the most delicious traditional recipes outdoors. The smoke, aromas, and company of loved ones turn cooking into a memorable experience.",
        act_pingpong_title: "Ping-Pong Table",
        act_pingpong_desc: "Ready for competition? Organize a championship with friends and enjoy movement and fun. Our professional table is ready for intense matches and lots of laughter.",
        act_bbq_title: "BBQ Area",
        act_bbq_desc: "No cabin trip is complete without a hot grill. The space is fully equipped with utensils and wood, so you just bring your favorite ingredients and good vibes.",
        act_music_title: "Music & Party",
        act_music_desc: "Turn up the volume! Our high-performance audio system is ready to keep the party rhythm going until dawn. Create the perfect playlist and enjoy a vibrant atmosphere.",

        // --- CONTACT DETAILS SECTION (NEW) ---
        contact_main_heading: "We are just a message away",
        contact_phone_title: "Phone",
        contact_phone_desc: "We are available for you.",
        contact_wa_title: "WhatsApp",
        contact_wa_desc: "Send us a quick message.",
        contact_wa_btn: "Open Chat",
        contact_email_title: "Email",
        contact_email_desc: "For offers and details.",

        // --- Info Section ---
        about_title: "About us", about_subtitle: "Find out some stuff about our location",
        activities_title: "Our Activities", activities_subtitle: "Endless ways to relax and have fun",
        info_title: "The Ach Residence Experience",
        info_desc: "Whether you plan a legendary party or seek a quiet retreat to disconnect from the urban hustle, our location transforms to suit your needs. We offer the perfect setting where memories come to life, in a modern and welcoming decor.",
        feat_party_title: "Private Parties", feat_party_desc: "High-performance sound system, ambient lights, and generous space for dancing.",
        feat_relax_title: "Relaxation", feat_relax_desc: "Lounge area, hot tub, and complete silence in the middle of nature.",
        feat_comfort_title: "Premium Comfort", feat_comfort_desc: "Spacious and modern rooms for resting after the event.",

        // --- Stats ---
        stats_years: "Years of Activity", stats_clients: "Happy Clients", stats_birthdays: "Birthdays Celebrated",

        // --- Reviews ---
        reviews_title: "What our guests say", reviews_subtitle: "The opinions of those who have visited us are our business card.",
        review_1_text: '"I organized my daughter\'s 18th birthday here and everything was superlative! The sound system is brilliant, we didn\'t disturb anyone, and the villa is very spacious."', review_1_tag: "Private Party",
        review_2_text: '"An oasis of peace. We came for a relaxing weekend with friends. The hot tub was the main attraction, and the cleanliness was exemplary. We will be back!"', review_2_tag: "Relaxation",
        review_3_text: '"Very welcoming hosts and a modern location. We liked the fact that we had total privacy. We felt exactly like home, but much more pampered."', review_3_tag: "Teambuilding",
        review_4_text: '"We spent Christmas here with the whole family. The huge living room allowed us all to sit at the table, and the atmosphere was magical."', review_4_tag: "Family Vacation",
        review_5_text: '"The location looks exactly like in the pictures, maybe even better. Equipped with absolutely everything you need. I recommend it for cleanliness and seriousness."', review_5_tag: "Couple",

        // --- CTA & Contact Footer ---
        cta_title: "Did we catch your eye?", cta_text: "Escape the daily grind and embrace the rural tranquility. We await you with authentic experiences, full comfort, and memories waiting to be made.", cta_btn: "BOOK NOW",
        contact_title: "Contact", contact_subtitle: "Find out how to reach us",
        booking_title: "Book Now", booking_subtitle: "Select your preferred dates and make first step to amaizing trip",

        // --- Footer ---
        footer_desc: "Relaxation and party in the middle of nature.", footer_social_title: "Find us on social media", footer_menu_title: "Quick Menu", footer_map_title: "Where to find us?", footer_rights: "© 2026 Achresidence. All rights reserved."
    }
};

// --- Functia de schimbare a limbii ---
function changeLanguage(lang) {
    if (!translations[lang]) return;
    const elements = document.querySelectorAll("[data-key]");
    
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            // Folosim innerHTML
            element.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('preferredLanguage', lang);
}
// Exemplu de utilizare (pune asta pe butoanele tale de steaguri):
// changeLanguage('en'); 
// changeLanguage('ro');

// Variabile globale pentru calendar
let checkInPicker_Instance = null;
let checkOutPicker_Instance = null;
let visualCalendarInstance = null;
let cachedBookings = [];
let currentBookings = [];

// ================= FUNCȚII AJUTĂTOARE (Definiții) =================

function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function refreshCalendars() {
    console.log("Se verifică actualizări calendar...");
    fetch(SCRIPT_URL)
      .then(response => response.json())
      .then(bookings => {
        cachedBookings = bookings;
        const disableForCheckIn = [];
        const disableForCheckOut = [];

        bookings.forEach(booking => {
            let current = new Date(booking.start);
            const endDate = new Date(booking.end);
            while (current <= endDate) {
                const dateStr = current.toISOString().split('T')[0];
                if (dateStr !== booking.end) disableForCheckIn.push(dateStr);
                if (dateStr !== booking.start) disableForCheckOut.push(dateStr);
                current.setDate(current.getDate() + 1);
            }
        });

        // Verificăm dacă elementele există înainte de a crea Flatpickr
        if(document.getElementById("checkout")) {
            if (checkOutPicker_Instance) {
                checkOutPicker_Instance.set('disable', disableForCheckOut);
            } else {
                checkOutPicker_Instance = flatpickr("#checkout", {
                    locale: "ro", dateFormat: "Y-m-d", minDate: "today", disable: disableForCheckOut
                });
            }
        }

        if(document.getElementById("checkin")) {
            if (checkInPicker_Instance) {
                checkInPicker_Instance.set('disable', disableForCheckIn);
            } else {
                checkInPicker_Instance = flatpickr("#checkin", {
                    locale: "ro", dateFormat: "Y-m-d", minDate: "today", disable: disableForCheckIn,
                    onChange: function(selectedDates, dateStr, instance) {
                        if (selectedDates[0] && checkOutPicker_Instance) {
                            const checkInDate = selectedDates[0];
                            const minCheckout = new Date(checkInDate);
                            minCheckout.setDate(minCheckout.getDate() + 1);
                            checkOutPicker_Instance.set('minDate', minCheckout);
                            
                            // Logica barieră (dacă vrei să o păstrezi, e ok aici)
                             setTimeout(() => checkOutPicker_Instance.open(), 100); 
                        }
                    }
                });
            }
        }
      })
      .catch(err => console.error("Eroare la actualizarea calendarului (formular):", err));
}

function initVisualCalendar() {
    const loader = document.getElementById("calendarLoader");
    // Dacă nu suntem pe pagina cu calendarul vizual, ieșim
    if(!document.getElementById("availabilityCalendar")) return;

    if (loader && !visualCalendarInstance) loader.style.display = "block";

    fetch(SCRIPT_URL)
      .then(response => response.json())
      .then(bookings => {
        if (loader) loader.style.display = "none";
        currentBookings = bookings;

        if (visualCalendarInstance) {
            visualCalendarInstance.redraw();
        } else {
            visualCalendarInstance = flatpickr("#availabilityCalendar", {
              inline: true, locale: "ro", dateFormat: "Y-m-d", minDate: "today", clickOpens: false,
              onDayCreate: function(dObj, dStr, fp, dayElem) {
                const dateTimestamp = dayElem.dateObj.getTime();
                let isMiddle = false, isStart = false, isEnd = false;
                
                currentBookings.forEach(booking => {
                  const startDate = new Date(booking.start).setHours(0,0,0,0);
                  const endDate = new Date(booking.end).setHours(0,0,0,0);
                  if (dateTimestamp > startDate && dateTimestamp < endDate) isMiddle = true;
                  if (dateTimestamp === startDate) isStart = true;
                  if (dateTimestamp === endDate) isEnd = true;
                });

                if (isMiddle || (isStart && isEnd)) { dayElem.classList.add("day-occupied"); dayElem.title = "Ocupat"; }
                else if (isStart) { dayElem.classList.add("day-checkin"); dayElem.title = "Check-in"; }
                else if (isEnd) { dayElem.classList.add("day-checkout"); dayElem.title = "Check-out"; }
              }
            });
        }
      })
      .catch(err => {
         console.error("Eroare calendar vizual:", err);
         if (loader) loader.style.display = "none";
      });
}

// ================= MAIN: DOMContentLoaded (TOTUL ÎNCEPE AICI) =================
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SETĂRI LIMBĂ
    const savedLang = localStorage.getItem('preferredLang');
    setLanguage(savedLang ? savedLang : 'ro');

    // 2. SLIDER HERO
    const slidesContainer = document.getElementById('slidesContainer');
    if (slidesContainer) {
        let slideIndex = 0;
        const totalSlides = 3; 
        let autoSlideInterval;
        
        function updateSlider() { slidesContainer.style.transform = `translateX(-${slideIndex * 100}vw)`; }
        function moveSlide(direction) {
            slideIndex += direction;
            if (slideIndex >= totalSlides) slideIndex = 0;
            else if (slideIndex < 0) slideIndex = totalSlides - 1;
            updateSlider(); resetTimer();
        }
        function startTimer() { autoSlideInterval = setInterval(() => { moveSlide(1); }, 3000); }
        function resetTimer() { clearInterval(autoSlideInterval); startTimer(); }
        
        // Butoane
        const btnPrev = document.querySelector('.prev');
        const btnNext = document.querySelector('.next');
        if(btnPrev) btnPrev.addEventListener('click', () => moveSlide(-1));
        if(btnNext) btnNext.addEventListener('click', () => moveSlide(1));
        
        startTimer();
    }

    // 3. ANIMAȚII SCROLL (SLIDE IN) - PARTEA PROBLEMĂ
    const hiddenElements = document.querySelectorAll('.hidden-element');
    
    if(hiddenElements.length > 0) {
        const observerOptions = { threshold: 0.15 };
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-element');
                    scrollObserver.unobserve(entry.target); // Oprim observarea după ce apare
                }
            });
        }, observerOptions);

        hiddenElements.forEach((el) => scrollObserver.observe(el));
    }

    // 4. STATISTICI (COUNTERS)
    const statsSection = document.querySelector('.stats-section');
    if(statsSection) {
        let hasStartedStats = false;
        const statsObserver = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !hasStartedStats) {
                hasStartedStats = true;
                const counters = document.querySelectorAll('.counter');
                counters.forEach(counter => {
                    counter.innerText = '0';
                    const target = +counter.getAttribute('data-target');
                    const increment = target / 100; 
                    const updateCounter = () => {
                        const c = +counter.innerText;
                        if (c < target) {
                            counter.innerText = `${Math.ceil(c + increment)}`;
                            setTimeout(updateCounter, 25);
                        } else {
                            counter.innerText = target;
                            if(target > 10) counter.innerText += "+"; 
                        }
                    };
                    updateCounter();
                });
            }
        }, { threshold: 0.3 });
        statsObserver.observe(statsSection);
    }

    // 5. PORNIRE CALENDARE (Doar dacă există elementele în pagină)
    if(document.getElementById('checkin') || document.getElementById('checkout')) {
        refreshCalendars();
        setInterval(refreshCalendars, 5000);
    }
    
    if(document.getElementById('availabilityCalendar')) {
        initVisualCalendar();
        setInterval(initVisualCalendar, 5000);
    }

    // 6. FORMULAR CONTACT
    const form = document.getElementById('contactForm');
    
    // --- MODAL SUCCES ---
    const modalSuccess = document.getElementById('customModal');
    const btnCloseSuccess = document.querySelector('.modal-btn-close');

    // --- MODAL EROARE (NOU) ---
    const modalError = document.getElementById('errorModal');
    const btnCloseError = document.querySelector('.modal-btn-close-error');

    // Funcții de închidere
    const closeSuccess = () => { if(modalSuccess) modalSuccess.classList.remove('active'); };
    const closeError = () => { if(modalError) modalError.classList.remove('active'); };

    // Evenimente închidere SUCCES
    if (btnCloseSuccess) btnCloseSuccess.addEventListener('click', closeSuccess);
    if (modalSuccess) modalSuccess.addEventListener('click', (e) => { if (e.target === modalSuccess) closeSuccess(); });

    // Evenimente închidere EROARE (NOU)
    if (btnCloseError) btnCloseError.addEventListener('click', closeError);
    if (modalError) modalError.addEventListener('click', (e) => { if (e.target === modalError) closeError(); });


    // Logica Formularului
    if(form) {
        const btnSubmit = document.getElementById('btnSubmit');

        form.addEventListener('submit', e => {
            e.preventDefault();

            // --- VALIDARE MANUALĂ CU MODAL ---
            const checkinVal = document.getElementById('checkin').value;
            const checkoutVal = document.getElementById('checkout').value;

            if (!checkinVal || !checkoutVal) {
                // AICI DESCHIDEM MODALUL DE EROARE ÎN LOC DE ALERT
                if(modalError) modalError.classList.add('active');
                return; // Oprim execuția
            }
            // ---------------------------------

            const textInitial = btnSubmit.innerText;
            btnSubmit.innerText = "Se verifică...";
            btnSubmit.disabled = true;

            fetch(SCRIPT_URL, { method: 'POST', body: new FormData(form) })
            .then(res => { if (!res.ok) throw new Error('Eroare server'); return res.json(); })
            .then(data => {
                if (data.result === "ERROR") {
                    // Putem folosi modalul de eroare și aici, schimbând textul dinamic dacă vrei, 
                    // dar momentan lăsăm alert pentru erori de server
                    alert("❌ EROARE: " + data.message);
                } else {
                    // DESCHIDEM MODALUL DE SUCCES
                    if(modalSuccess) modalSuccess.classList.add('active');
                    
                    form.reset(); 
                    if(document.getElementById('checkin')._flatpickr) document.getElementById('checkin')._flatpickr.clear();
                    if(document.getElementById('checkout')._flatpickr) document.getElementById('checkout')._flatpickr.clear();
                }
            })
            .catch(err => { console.error(err); alert('Eroare la trimitere.'); })
            .finally(() => { btnSubmit.innerText = textInitial; btnSubmit.disabled = false; });
        });
    }

   // 7. CARUSEL RECENZII - INFINITE LOOP LOGIC + SWIPE
    const track = document.getElementById('reviewsTrack');
    if (track) {
        // Așteptăm să se încarce totul
        setTimeout(() => {
            const nextButton = document.getElementById('nextReview');
            const prevButton = document.getElementById('prevReview');
            
            // Luăm elementele originale
            let slides = Array.from(track.children);
            if(slides.length === 0) return;

            // CONFIGURARE CLONE
            const clonesCount = 3; 
            const firstClones = slides.slice(0, clonesCount).map(slide => slide.cloneNode(true));
            const lastClones = slides.slice(-clonesCount).map(slide => slide.cloneNode(true));

            // Adăugăm clonele în DOM
            firstClones.forEach(clone => {
                clone.classList.add('clone-slide'); 
                track.appendChild(clone);
            });
            lastClones.reverse().forEach(clone => {
                clone.classList.add('clone-slide'); 
                track.prepend(clone);
            });

            // Re-selectăm toate slide-urile (inclusiv clonele)
            const allSlides = Array.from(track.children);
            
            // Setăm indexul de start
            let currentIndex = clonesCount;
            let isTransitioning = false; 

            function updateCarouselPosition(transition = true) {
                // Calculăm lățimea dinamic (pentru că pe mobil e diferită de desktop)
                const slideWidth = allSlides[0].getBoundingClientRect().width;
                const gap = 20; 
                const moveAmount = (slideWidth + gap) * currentIndex;
                
                if (transition) {
                    track.style.transition = 'transform 0.5s ease-in-out';
                } else {
                    track.style.transition = 'none'; 
                }
                track.style.transform = `translateX(-${moveAmount}px)`;
            }

            // Inițializare
            updateCarouselPosition(false);

            // EVENT LISTENER: Transition End
            track.addEventListener('transitionend', () => {
                isTransitioning = false;
                if (currentIndex >= allSlides.length - clonesCount) {
                    currentIndex = clonesCount; 
                    updateCarouselPosition(false); 
                }
                if (currentIndex < clonesCount) {
                    currentIndex = allSlides.length - (clonesCount * 2); 
                    updateCarouselPosition(false); 
                }
            });

            // Funcții de navigare
            const goNext = () => {
                if (isTransitioning) return;
                isTransitioning = true;
                currentIndex++;
                updateCarouselPosition(true);
            };

            const goPrev = () => {
                if (isTransitioning) return;
                isTransitioning = true;
                currentIndex--;
                updateCarouselPosition(true);
            };

            // BUTOANE CLICK
            if (nextButton) nextButton.addEventListener('click', goNext);
            if (prevButton) prevButton.addEventListener('click', goPrev);

            // Recalculare la resize
            window.addEventListener('resize', () => {
                track.style.transition = 'none';
                updateCarouselPosition(false);
            });

            // ==========================================
            // LOGICA NOUĂ PENTRU SWIPE (TELEFON)
            // ==========================================
            let touchStartX = 0;
            let touchEndX = 0;

            track.addEventListener('touchstart', (e) => {
                // Reținem unde a pus utilizatorul degetul
                touchStartX = e.changedTouches[0].screenX;
            }, {passive: true});

            track.addEventListener('touchend', (e) => {
                // Reținem unde a ridicat utilizatorul degetul
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, {passive: true});

            function handleSwipe() {
                // Dacă a tras spre stânga (swipe left) -> Mergem înainte (Next)
                if (touchStartX - touchEndX > 50) {
                    goNext();
                }
                // Dacă a tras spre dreapta (swipe right) -> Mergem înapoi (Prev)
                if (touchEndX - touchStartX > 50) {
                    goPrev();
                }
            }

        }, 100);
    }

    

});

// 7. Navbar Scroll (Poate rămâne în afara DOMContentLoaded sau înăuntru)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(!navbar) return;
    
    const path = window.location.pathname;
    const pageName = path.split("/").pop(); 
    let limit = (pageName === 'index.html' || pageName === '') ? window.innerHeight * 0.9 : window.innerHeight * 0.4;

    if (window.scrollY > limit) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("caption");
    
    // Setăm imaginea și textul
    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt; // Ia textul din atributul 'alt'
    
    // Oprim scroll-ul paginii în spate
    document.body.style.overflow = "hidden";
}

function closeLightbox(event) {
    // Închide doar dacă dai click pe fundal (id=lightbox) sau pe butonul X (class=close-lightbox)
    // Astfel, dacă dai click pe poză, NU se închide.
    if (event.target.id === 'lightbox' || event.target.classList.contains('close-lightbox')) {
        const lightbox = document.getElementById("lightbox");
        lightbox.style.display = "none";
        
        // Repornim scroll-ul paginii
        document.body.style.overflow = "auto";
    }
}

// Închidere cu tasta ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const lightbox = document.getElementById("lightbox");
        if (lightbox.style.display === "flex") {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});



