function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

  emailjs.send("service_buxrfhw","template_u2eqrbn",parms).then(alert("Email sent successfully!!!"))
};
