$(function() {
    $('form input[type=submit]').click(sendForm);
});

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
                $('#form-result').html(`<img src="img/hobbies/thank-you.jpg" class="form-result"> </img>`);
                $('#contacts').hide();
                
        });
}
$('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1500);
        }
    });



//  $('#dropbtn').click(function(){
//     $('#dropbtn-list').slideToggle("slow");
//     });
    
    
