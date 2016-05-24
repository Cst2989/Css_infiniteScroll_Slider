$(document).ready(function() {
    var moveValue = 163;
    var working = 0;
    $(".slider_2").on('click', '.slide_right', function(event) {
        if (working == 0) {
            working = 1;
            event.preventDefault();
            var removed = $(".image_item.first").removeClass('first').css("margin-left", "-163px");
            $(".slides_wrapper").find('.active').removeClass('active').addClass('first');
            $(".image_item.last").removeClass('last').addClass('active').next().addClass('last');
            $(".image_item.first_not_visible").removeClass('first_not_visible').next().addClass('first_not_visible');
            setTimeout(function() {
                removed.remove();
                removed.css("margin-left", "0px");
                $(".slides_wrapper").append(removed);
                working = 0;
            }, 500)
            if ($(".text_slider").find(".active").is(':last-child')) {
                $(".text_slider").find(".active").removeClass('active')
                $(".text_box").first().addClass('active')
            } else {
                $(".text_slider").find(".active").removeClass('active').next().addClass('active')
            }
        }


    });

    $(".slider_2").on('click', '.slide_left', function(event) {
        event.preventDefault();
        var removed = $(".image_item").last().css("margin-left", "-163px");
        $(".slides_wrapper").prepend(removed);
        //removed.css("margin-left","0px");
        $(".slides_wrapper").find('.first_not_visible').removeClass('first_not_visible');
        $(".slides_wrapper").find('.last').removeClass('last').addClass('first_not_visible');
        $(".slides_wrapper").find('.active').removeClass('active').addClass('last');
        $(".slides_wrapper").find('.first').removeClass('first').addClass('active');

        removed.animate({
            marginLeft: '0px'
        }, 500);
        $(".image_item").first().addClass('first');
        if ($(".text_slider").find(".active").is(':first-child')) {
            $(".text_slider").find(".active").removeClass('active')
            $(".text_box").last().addClass('active')
        } else {
            $(".text_slider").find(".active").removeClass('active').prev().addClass('active')
        }
    });


});
