jQuery(document).ready(function($){

    //grab the contact form class
    $zen_contact_form = $('#contact-link'),
    //remove class for contact form
    $zen_form = $('.contact-form'),
    //targetting the contact class for contact form removal
    $remove_contact = $('.remove-contact');

    //this should scroll the contact form down into place
    $zen_contact_form.on('click', function(event){
        $('.contact-form').removeClass('contact-animation-out').addClass('contact-animation')
    });
    //this removes the class .contact-animation from the contact directive
    //which forces it to ascend into the heavens above.
    $remove_contact.on('click', function(event){
        $('.contact-form').removeClass('contact-animation')
    });
    
});