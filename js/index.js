
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

		function getWeather() {

					$.ajax({
							url : "http://api.wunderground.com/api/abc8bf7911867f74/geolookup/conditions/astronomy/q/2204.json",
							dataType : "jsonp",
							success : function(parsed_json) {
							var location = parsed_json['location']['zip'];
							var weather = parsed_json['current_observation']['weather'];
							var humidity = parsed_json['current_observation']['relative_humidity'];
							var moonCover = parsed_json['moon_phase']['percentIlluminated'];
							//var sunsetHour = parsed_json['sunset']['hour'];
							//sunset hour isn't working (documentation could be clearer) - may need to use a diff API
							// $
							console.log("The current weather at " + " is: " + weather );
							console.log("The current humidity " + " is: " + humidity);
							console.log("The percentage of the moon that's showing is " + moonCover + "%.");
							$("#viewingConditions").text("The current viewing conditions are " + weather + ".");
							$("#currentHumidity").text("The current humidity is " + humidity + ".");
							$("#moonCover").text("The percentage of the moon that's visible is " + moonCover + "%.");
									}
 		});
	}

// 		$.ajax({
// 				url:
// "http://api.worldweatheronline.com/free/v2/marine.ashx?key=1e9d50bc0cc4407c4f0897973ed6f&format=json&q=39,-77",
// 				dataType : "jsonp",
// 				success : function(parsed_json) {
// 				var sunsetTime = parsed_json['hourly']['tempF'];
//
// 				console.log("Sunset is at " + sunsetTime);
// }
//
// });






//NASA API KEY: 1s2CI9FRZRUR1D57Pt75yJkoygz3OiTLeYlEvWhv
//local lat = 38.84
//local long = -77.09

//world weather online api key: 1e9d50bc0cc4407c4f0897973ed6f

		$(".readmore").click(readmore);
		$(".readless").click(readless);
		$("#tellMe").click(getWeather);

});
