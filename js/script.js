jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 200,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 700,
    //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
    //grab the "back to top" link
        $back_to_top = $('#back-to-top'),
    
    //grab the "ng-view" link
        $zen_kitty_menu = $('.zen-kitty-menu-items'),
    //grab the contact form class
        $zen_contact_form = $('#zen-contact'),
    //remove class for contact form
        $zen_form = $('.zen-kitties-contact-form'),
    //targetting the contact class for contact form removal
        $remove_contact = $('.remove-contact');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration
        );
    });
    
    
});