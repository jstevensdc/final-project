
$(document).ready(function() {


		function readmore() {
				event.preventDefault();
				$(this).parent().find("p").slideDown("fast");
				$(this).hide();
		}

 		function readless() {
	 			event.preventDefault();
				$(this).parent().find("#show-this-on-click").slideUp("fast");
	 			$(this).hide();
				$(".readmore").show();
 		}

		function getWeather() {

				event.preventDefault();

				var valInput = $("#inputZip").val();

				$.ajax({
						url : "http://api.wunderground.com/api/abc8bf7911867f74/geolookup/conditions/astronomy/q/" + valInput + ".json",
						dataType : "jsonp",
						success : function(parsed_json) {
						var location = parsed_json['location']['zip'];
						var weather = parsed_json['current_observation']['weather'];
						var humidity = parsed_json['current_observation']['relative_humidity'];
						var moonCover = parsed_json['moon_phase']['percentIlluminated'];
						$("#conditionsList").show();
						$("#conditionsList").css({"visibility": "visible"});
						$("#viewingConditions").text("The current viewing conditions are " + weather + ".");
						$("#currentHumidity").text("The current humidity is " + humidity + ".");
						$("#moonCover").text("The percentage of the moon that's visible is " + moonCover + "%.");
						}
 		});
	}

		$(".readmore").click(readmore);
		$(".readless").click(readless);
		$("#submit-btn").click(getWeather);

});
