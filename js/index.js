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
    const form = document.getElementById('form');
    if (form.checkValidity()) {
        $('form')[0].reset();
        $('#form-result').html(`<img src="img/hobbies/thank-you.jpg" class="form-result"> </img>`);
        $('#contacts').hide();
    }
    else {
        alert('Please fill out the form correctly');
    }
}








/*.done(function() {
    $('form')[0].reset();
    $('#form-result').html(`<img src="img/hobbies/thank-you.jpg" class="form-result"> </img>`);
    $('#contacts').hide();

})
.fail(function(e) { 
    alert("sorry");
});*/



$('.smooth').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1500);
    }
});

setCarouselHeight('#carousel');

function setCarouselHeight(id) {
    var slideHeight = [];
    $(id + ' .item').each(function() {
        slideHeight.push($(this).height());
    });
    max = Math.max.apply(null, slideHeight);
    $(id + ' .carousel-inner').each(function() {
        $(this).css('height', max + 'px');
    });
}

//  $('#dropbtn').click(function(){
//     $('#dropbtn-list').slideToggle("slow");
//     });
