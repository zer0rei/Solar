$(document).ready(function() {
	// Layout

	// Elements Heights and Margins
	var windowHeight = $(window).height(),
		titleBoxHeight = $("#title-box").height(),
		navbarHeight = $(".navbar").height(),
		marginTopTitle = windowHeight - titleBoxHeight - 50;
	$(".page").css("min-height", windowHeight);
	$("#title-box").css("margin-top", marginTopTitle);
	if (windowHeight < (titleBoxHeight + navbarHeight + 100)) {
		$("#title-box").css("margin-top", navbarHeight + 50);
	}

	// Explore-Button scroll
	var $root = $("html, body");
	$(".explore-button").click(function() {
		$root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});

});
