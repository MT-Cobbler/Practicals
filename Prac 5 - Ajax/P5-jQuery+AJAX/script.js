(() => {
    $("#loginBtn").on('click', event => {
        event.preventDefault();
        $.ajax({
                url: 'checkPassword.php',
                type: 'POST',
                data: {
                    "email": $("#loginEmail").val(),
                    "pass": $("#loginPass").val()
                }
            })
            .then(data => {
                var warningPrompt = $('<div></div>', {
                    class: "alert alert-warning mt-3",
                    role: "alert",
                    html: data
                })
                $("#warning").append(warningPrompt);
            })
    })
});