$(function() {
    $('index input[type=submit]'.click(sendForm))
})

function sendForm(e) {
    e.preventDefault();
    $.ajax({
            url: "https://formspree.io/tarassito@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                comment: $('#comment').val()
            },
            dataType: "json"
        })
        .done(function() {
                $('form')[0].reset();
                $('#form-result').html('<p>I ll connect you as soon as posibble < /p>');
        })
