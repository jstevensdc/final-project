
$(document).ready(function() {


		function readmore() {
			$(this).parent().find("p").slideDown("fast");
			$(this).hide();
}

 		function readless() {
	 		$(this).parent().find("#show-this-on-click").slideUp("fast");
	 		$(this).hide();
			$(".readmore").show();
}


		function learnmore() {
			$("span").slideDown("fast");
			$(".learnmore").hide();
}


		$(".readmore").click(readmore);
		$(".readless").click(readless);

});
