/* -----------------------------------------------
					Js Main
--------------------------------------------------
    Template Name: Elmiz - Personal Portfolio Template
--------------------------------------------------

Table of Content

	. Preloader
    . Menu
    . Progress Bar
    . mixItUp
    . MagnificPopup
    . Testimonials
    . WOW

 
----------------------------------- */


(function ($) {
    "use strict";

    /* -----------------------------------
            Preloader
    ----------------------------------- */
        $('.loading').delay(500).fadeOut(500);


    /* -----------------------------------
            Menu
    ----------------------------------- */
    $('.js-toggle-menu').on('click',function (e) {
        e.preventDefault();
        $('.menu').slideToggle();
        $(this).toggleClass('open');
    });
  

    /* -----------------------------------
            Progress Bar
    ----------------------------------- */
    $(window).on('scroll', function () {
        $(".skill-progress .skill-progress-bar").each(function () {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if (bottom_window > bottom_object) {
                $(this).css({
                    width: progressWidth
                });
            }
        });
    });
  
   
    


    /* -----------------------------------
                WOW
    -----------------------------------*/
        new WOW().init();

    
})(jQuery);








  