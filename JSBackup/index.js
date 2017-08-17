$(function () {
    $("#slider2").responsiveSlides({
        auto: true,
        pager: true,
        speed: 300,
        namespace: "callbacks",
    });

    $("#owl-demo").owlCarousel({
        items: 3,
        lazyLoad: true,
        autoPlay: false,
        pagination: true,
    });

    $("span.menu").click(function () {
        $("ul.res").slideToggle(300, function () {
            // Animation complete.
        });
    });

    $(".item-hover.swipebox").click(function (e) {
        var parent = $(this).parent().parent();
        var img = $(parent).find(".img-responsive");
        var splittedData = $(img).attr("src").split("/");
        var countryData = {
            imgSrc: $(img).attr("src"),
            data: (splittedData[splittedData.length - 2]).toLowerCase()
        }
        localStorage.setItem("countryData", JSON.stringify(countryData));
    });

    window.scrollTo(0, 1);
    new WOW().init();
});