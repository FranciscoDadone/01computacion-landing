$("#contactForm").submit((e) => {
    e.preventDefault();
    var name    = $("#name").val(),
        email   = $("#email").val(),
        subject = $("#subject").val(),
        message = $("#message").val();

    const data = {
        name,
        email,
        subject,
        message
    }
    
    $.post('/contact', data, (res) => {
        bootsalert({
            className:(res == "OK") ? "success" : (res == "cooldown") ? "warning" : "danger",
            message:(res == "OK") ? "¡Mensaje enviado!" : (res == "cooldown") ? "Espera unos minutos para enviar otro mensaje!" : "Error al enviar el mensaje.",
            container:"form-notification",
            closebtn:true,
            append:false
        });
    });

});