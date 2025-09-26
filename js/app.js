$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    });

    $('.project-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 1000,
        autoplay: true,
        margin: 24,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                items: 1,
                center: true,
            },
            768: {
                items: 2
            },
            1140: {
                items: 2,
                center: true,
                dots: true

            }
        }
    })
});


/*(function () {
    emailjs.init("gE3mMym6qyi929F90"); // 👈 reemplaza con tu Public Key
})();

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_pu9hmyj", "template_xbenpg9", this)
        .then(() => {
            msg.textContent = "✅ ¡Mensaje enviado con éxito!";
            msg.className = "mensaje exito";
            msg.style.display = "block";
            form.reset();
        }, (error) => {
            msg.textContent = "❌ Error al enviar: " + JSON.stringify(error);
            msg.className = "mensaje error";
            msg.style.display = "block";
        });
});*/

                     
const btn = document.getElementById("button");


document.getElementById("contacForm").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_7ty8git";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
      msg.textContent = "✅ ¡Mensaje enviado con éxito!";
     
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("apellido").value = "";
       document.getElementById("message").value = "";
      
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    },
  );
});

