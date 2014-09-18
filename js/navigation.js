$(document).ready(function() {
		// margin left = - ([width of element] + [total vertical padding of element])
		$("#header").css("padding-top", "-500px");
		$("#header").css("opacity", "0");

		$("#header").animate({
			paddingTop : "0"
		}, 50);
		$("#header").animate({
			paddingTop : "15px",
			opacity : 1
		}, 250);
		$("#header").animate({
			paddingTop : "0"
		}, 250);

		slide("#navigation", 55, 15, 150, .8);
});

function slide(navigation_id, pad_out, pad_in, time, multiplier) {
	// creates the target paths
	var list_elements = navigation_id + " div.slidernav";
	var link_elements = list_elements + " a";

	// initiates the timer used for the sliding animation
	var timer = 0;

	// creates the slide animation for all list elements
	$(list_elements).each(function(i) {
		// margin left = - ([width of element] + [total vertical padding of element])
		$(this).css("margin-left", "-180px");
		// updates timer
		timer = (timer * multiplier + time);
		$(this).animate({
			marginLeft : "0"
		}, timer);
		$(this).animate({
			marginLeft : "5px"
		}, timer);
		$(this).animate({
			marginLeft : "0"
		}, timer);
	});

	// creates the hover-slide effect for all link elements
	$(link_elements).each(function(i) {
		$(this).hover(function() {
			$(this).animate({
				paddingLeft : pad_out
			}, 150);
		}, function() {
			$(this).animate({
				paddingLeft : pad_in
			}, 150);
		});
	});
}