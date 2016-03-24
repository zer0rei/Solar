$(document).ready(function() {
	// Layout

	// Elements Heights and Margins
	var windowHeight = $(window).height(),
		titleBoxHeight = $("#title-box").height(),
		navbarHeight = $(".navbar").height(),
		marginTopTitle = (windowHeight - titleBoxHeight) / 2;
	$("#wrapper").css("min-height", windowHeight);
	$("#layer").css("min-height", $("#wrapper").height());
	$("#layer").css("min-width", $("#wrapper").width());
	$("#title-box").css("margin-top", marginTopTitle);
	if (windowHeight < (titleBoxHeight + navbarHeight + marginTopTitle + 10)) {
		$("#title-box").css("margin-top", navbarHeight + 10);
		$("#title-box").css("margin-bottom", 10);
	}

});
