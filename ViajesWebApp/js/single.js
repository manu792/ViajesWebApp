$(function () {
    $(".arrow-display-left").click(function () {
        var img = $(this).parent().find("img");
        var imgSrc = $(img).attr("src");
        var splittedPath = imgSrc.split("/");
        var imgNumber = splittedPath[splittedPath.length - 1];
        var prevImg = parseInt(imgNumber) - 1;
        checkIfImageExists(splittedPath[0] + "/" + splittedPath[1] + "/" + splittedPath[2] + "/" + prevImg + ".jpg", function (doesImageExist) {
            if (doesImageExist) {
                $(img).attr("src", splittedPath[0] + "/" + splittedPath[1] + "/" + splittedPath[2] + "/" + prevImg + ".jpg");
                $(img).hide().fadeIn();
            }
        });
    });

    $(".arrow-display-right").click(function () {
        var img = $(this).parent().find("img");
        var imgSrc = $(img).attr("src");
        var splittedPath = imgSrc.split("/");
        var imgNumber = splittedPath[splittedPath.length - 1];
        var nextImg = parseInt(imgNumber) + 1;
        checkIfImageExists(splittedPath[0] + "/" + splittedPath[1] + "/" + splittedPath[2] + "/" + nextImg + ".jpg", function (doesImageExist) {
            if (doesImageExist) {
                $(img).attr("src", splittedPath[0] + "/" + splittedPath[1] + "/" + splittedPath[2] + "/" + nextImg + ".jpg");
                $(img).hide().fadeIn();
            }
        });
    });

    var checkIfImageExists = function (imgPath, callback) {
        $.ajax({
            url: imgPath,
            type: 'HEAD',
            error: function () {
                callback(false);
            },
            success: function () {
                callback(true);
            }
        });
    }

    if ($(".img-responsive.wow.fadeInUp.animated").length > 0) {
        if (localStorage.getItem("countryData")) {
            var countryData = JSON.parse(localStorage.getItem("countryData"));
            $(".img-responsive.wow.fadeInUp.animated").attr("src", countryData.imgSrc);
            $(".lone-line").load(countryData.data + ".html");
        }
    }
});