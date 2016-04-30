(function ($) {
    'use strict';
    //set variables
    var projectList = $('.owl-carousel div'),
        projectContent = $('#projectContent .item');

    //Set up hidden instances
    projectContent.hide();
    projectContent.first().show();


    //Set index data
    projectList.each(function (index) {
        $(this).attr('data-index', index);
    })
    projectContent.each(function (index) {
        $(this).attr('data-index', index);
    })

    //Set click event on project items
    projectList.on('click', function () {
        projectContent.hide();
        projectContent.eq($(this).attr('data-index')).show()
    })


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 5
    });
})(jQuery);