jQuery(document).ready(function( $ ){
		const locale = (navigator && navigator.language) || "en";
		const shortoptions = { hour: "2-digit", minute: "2-digit" };
		const longoptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" };
		
		var timezone = time1.toLocaleString(locale, {day:'2-digit',timeZoneName: 'short' }).substring(4);
		$( "#TimeZoneHeader").append(timezone);
		
	
		const timeslots = [time1, time2, time3, time4, time5, time6, time7, time8, time9, time10, time11, time12, time13, time14, time15];
		for (let i = 1; i < 16; i++) {
			var endtime = new Date(timeslots[i-1]);
			endtime.setHours(endtime.getHours() + 4);
			$( "#LocalTimes").append("<p>Slot " + i + ": " + timeslots[i-1].toLocaleString(locale, longoptions) + " - " + endtime.toLocaleTimeString(locale, shortoptions) + "<p>");
			if (i === 5 || i === 10){
				$( "#LocalTimes").append("<p>&nbsp;</p>");
			}
		}
});
