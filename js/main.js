// Header
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header-wrap").addClass("active");
        } else {
            $(".header-wrap").removeClass("active");
        }
    });
});




$(document).ready(function () {
    $(".card").click(function () {
        $(".card").removeClass("active");
        $(this).addClass("active");
    });
});
