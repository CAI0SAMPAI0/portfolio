// variáveis

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir_menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir_menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir_menu')
})

//animação

ScrollReveal().reveal('.topo_do_site', {
    origin: 'left',
    duration: 2000,
    distance: '20%'

});

ScrollReveal().reveal('.especialidades', {
    origin: 'left',
    duration: 2000,
    distance: '20%'

});
ScrollReveal().reveal('.sobre', {
    origin: 'left',
    duration: 2000,
    distance: '20%'

});

// form funcionar

emailjs.init("bZKNsF7mdlOVbbxp4");

document.getElementById("contact_form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_7ja0hhk";
    const templateID = "template_4ddwfx2";
    const submit_btn = document.getElementById("submit_button")
    submit_btn.textContent = "Enviando...";
    submit_btn.disabled = true;


    emailjs.send(serviceID, templateID, formData)
        .then(() => {
            Toastify({
                text: "E-mail enviado com sucesso!",
                style: {
                    background: "#28a745",
                    color: "#f4f4f4"
                },
            }).showToast();

            document.getElementById("contact_form").reset();
        })
        .catch((error) => {
            Toastify({
                text: "Erro ao enviar o e-mail!",
                style: {
                    background: "#dc3545",
                    color: "#f4f4f4"
                },
            }).showToast();
        })
        .finally(() => {
            submit_btn.textContent = "ENVIAR";
            submit_btn.disabled = false;

        })
});