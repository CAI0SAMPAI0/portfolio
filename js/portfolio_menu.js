// =============================================
// MENU MOBILE
// =============================================

const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => menu.classList.add('abrir_menu'));
menu.addEventListener('click', () => menu.classList.remove('abrir_menu'));
overlay.addEventListener('click', () => menu.classList.remove('abrir_menu'));


// =============================================
// PARALLAX NAS SEÇÕES (item 4)
// Desabilitado em mobile/touch automaticamente
// =============================================

if (isFinePointer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const parallaxSections = document.querySelectorAll(
        '.topo_do_site .img-topo-site img, .esp-box, .projeto-card'
    );

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                // Parallax leve na imagem do hero
                const heroImg = document.querySelector('.topo_do_site .img-topo-site img');
                if (heroImg) {
                    heroImg.style.transform = `translateY(${scrollY * 0.06}px)`;
                }

                // Parallax sutil nos cards de especialidades
                document.querySelectorAll('.esp-box').forEach((box, i) => {
                    const rect = box.getBoundingClientRect();
                    const center = rect.top + rect.height / 2 - window.innerHeight / 2;
                    const offset = center * 0.035 * (i % 2 === 0 ? 1 : -1);
                    box.style.transform = box.matches(':hover')
                        ? 'translateY(-6px) scale(1.03)'
                        : `translateY(${offset}px)`;
                });

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// =============================================
// SCROLL REVEAL — ANIMAÇÕES
// =============================================

ScrollReveal().reveal('.topo_do_site', {
    origin: 'left', duration: 2000, distance: '20%'
});
ScrollReveal().reveal('.especialidades', {
    origin: 'left', duration: 2000, distance: '20%'
});
ScrollReveal().reveal('.sobre', {
    origin: 'left', duration: 2000, distance: '20%'
});
ScrollReveal().reveal('.portfolio', {
    origin: 'left', duration: 2000, distance: '20%'
});
ScrollReveal().reveal('.formulario, footer', {
    origin: 'left', duration: 2000, distance: '20%'
});
ScrollReveal().reveal('.projeto-card, .esp-box', {
    delay: 200, distance: '50px', origin: 'bottom', duration: 1000
});
ScrollReveal().reveal('.txt_topo_site, .titulo', {
    delay: 100, origin: 'left', distance: '30px'
});

// =============================================
// FORMULÁRIO — EMAILJS
// =============================================

emailjs.init("bZKNsF7mdlOVbbxp4");

document.getElementById("contact_form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        name:    document.getElementById("name").value,
        email:   document.getElementById("email").value,
        number:  document.getElementById("number").value,
        message: document.getElementById("message").value,
    };

    const submitBtn = document.getElementById("submit_button");
    submitBtn.value    = "Enviando...";
    submitBtn.disabled = true;

    emailjs.send("service_7ja0hhk", "template_4ddwfx2", formData)
        .then(() => {
            Toastify({
                text: "E-mail enviado com sucesso!",
                style: { background: "#28a745", color: "#f4f4f4" },
            }).showToast();
            document.getElementById("contact_form").reset();
        })
        .catch(() => {
            Toastify({
                text: "Erro ao enviar o e-mail!",
                style: { background: "#dc3545", color: "#f4f4f4" },
            }).showToast();
        })
        .finally(() => {
            submitBtn.value    = "ENVIAR";
            submitBtn.disabled = false;
        });
});