$(document).on('submit','#contact-form',function(e){
    e.preventDefault();
    alert('Your message has been sent');
    $('#contact-form')[0].reset();
});
