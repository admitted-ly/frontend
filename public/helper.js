

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("active");
        $(".dynamic-brand").removeClass("navbar-brand ")
    }
    else {
        $("#header").removeClass("active");
        $(".dynamic-brand").addClass("navbar-brand ")
	}
});