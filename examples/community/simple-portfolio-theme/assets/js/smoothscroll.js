 var addClassOnScroll = function () {
            var windowTop = $(window).scrollTop();
            $('section[id]').each(function (index, elem) {
                var offsetTop = $(elem).offset().top - 300;
                var outerHeight = $(this).outerHeight(true);

                if( windowTop > (offsetTop-50) && windowTop < ( offsetTop + outerHeight)) {
                    var elemId = $(elem).attr('id');
                    $(".menu-wrap ul li a.active").removeClass('active');
                    $(".menu-wrap ul li a[href='#" + elemId + "']").addClass('active');
                }
            });
        };

$(document).ready(function () {
    $(window).on("scroll", addClassOnScroll);
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(window).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(window).on("scroll", addClassOnScroll);
        });
    });
});

