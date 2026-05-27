var target = window.location.hash;
window.location.hash = "";

jQuery(document).ready(function( $ ){
		const gameListingCsv = "https://awwgf.gillthomson.co.uk/wp-content/uploads/2026/05/2026-AWWGF-GM-Form-Intake-Out-DataSet-3.csv"
		const locale = (navigator && navigator.language) || "en";
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZoneName: "long", hour: "2-digit", minute: "2-digit" };
		const slot1 = time1.toLocaleString(locale, options);
		const slot2 = time2.toLocaleString(locale, options);
		const slot3 = time3.toLocaleString(locale, options);
		const slot4 = time4.toLocaleString(locale, options);
		const slot5 = time5.toLocaleString(locale, options);
		const slot6 = time6.toLocaleString(locale, options);
		const slot7 = time7.toLocaleString(locale, options);
		const slot8 = time8.toLocaleString(locale, options);
		const slot9 = time9.toLocaleString(locale, options);
		const slot10 = time10.toLocaleString(locale, options);
		const slot11 = time11.toLocaleString(locale, options);
		const slot12 = time12.toLocaleString(locale, options);
		const slot13 = time13.toLocaleString(locale, options);
		const slot14 = time14.toLocaleString(locale, options);
		const slot15 = time15.toLocaleString(locale, options);
		$( "#Slot1Header").append( " - " + slot1);
		$( "#Slot2Header").append( " - " + slot2);
		$( "#Slot3Header").append( " - " + slot3);
		$( "#Slot4Header").append( " - " + slot4);
		$( "#Slot5Header").append( " - " + slot5);
		$( "#Slot6Header").append( " - " + slot6);
		$( "#Slot7Header").append( " - " + slot7);
		$( "#Slot8Header").append( " - " + slot8);
		$( "#Slot9Header").append( " - " + slot9);
		$( "#Slot10Header").append( " - " + slot10);
		$( "#Slot11Header").append( " - " + slot11);
		$( "#Slot12Header").append( " - " + slot12);
		$( "#Slot13Header").append( " - " + slot13);
		$( "#Slot14Header").append( " - " + slot14);
		$( "#Slot15Header").append( " - " + slot15);
		
		$( "#Slot1HeaderIndex").append( " - " + slot1);
		$( "#Slot2HeaderIndex").append( " - " + slot2);
		$( "#Slot3HeaderIndex").append( " - " + slot3);
		$( "#Slot4HeaderIndex").append( " - " + slot4);
		$( "#Slot5HeaderIndex").append( " - " + slot5);
		$( "#Slot6HeaderIndex").append( " - " + slot6);
		$( "#Slot7HeaderIndex").append( " - " + slot7);
		$( "#Slot8HeaderIndex").append( " - " + slot8);
		$( "#Slot9HeaderIndex").append( " - " + slot9);
		$( "#Slot10HeaderIndex").append( " - " + slot10);
		$( "#Slot11HeaderIndex").append( " - " + slot11);
		$( "#Slot12HeaderIndex").append( " - " + slot12);
		$( "#Slot13HeaderIndex").append( " - " + slot13);
		$( "#Slot14HeaderIndex").append( " - " + slot14);
		$( "#Slot15HeaderIndex").append( " - " + slot15);
			
                Papa.parse(gameListingCsv, {
                    header: true,
					download: true,
                    complete: function(results) {
						results.data.sort((a,b) => (a["Listing Alphabetical Index"] > b[["Listing Alphabetical Index"]] ? 1 : -1));
						for (let x in results.data) {
							var game = results.data[x];
							if (game["What is the title of your session?"] != ""){
								var gameId = game["Entry ID"];
								var slot = game["Please select which slot you wish to run the game in.\n\nSlot times can be found on discord server: AWWGF Info"].replace("Slot ","");
								$( "#Slot" + slot ).append( "<h3 id=\"Game" + gameId + "\" class=\"wp-block-heading\">" + game["What game system will you be running?"] + " — " + game["What is the title of your session?"] + "</h3>" );
								$( "#Slot" + slot ).append( "<h4 class=\"wp-block-heading\">Offered by " + game["Please enter your full Discord name, copied from your Discord profile."] + "</h4>" );
								$( "#Slot" + slot ).append( "<p>" + game["What is the pitch for your game?"].replaceAll("\n","<br />") + "</p>" );
								
								// Players
								$( "#Slot" + slot ).append( "<p><b>Players:</b> " + game["What is the minimum number of players your game requires to play?"] + "-" + game["What is the maximum number of players your game requires to play?\n\nPlease note that most games get sign-ups in excess of the available slots, so expect the number you enter here to be the number of players you get."] + " players, ages " + game["What is the minimum age for players in your game?"] + ".<br/>" + game["How will character creation be handled in your game?"] + "</p>" );
								
								$( "#Slot" + slot ).append( "<p><b>Content Warnings:</b> " + game["What content warnings, if any, should be listed with your game?"] + "<br/>" + "<b>Additional Safety Tools:</b> " + game["The Open Door Policy is required for all games.\n\nWhat additional safety tools will you use to reduce discomfort and support a safe, fun experience?"] + "<br/>" + "<b>Recommended experience level:</b> " + game["What experience-level is recommended for players?"] + "</p>" );
								
								var vtt = game["What Virtual Tabletop (VTT) or other virtual tools are you planning to use for this game, if any/if known?\n\n(examples: Character Keeper, Roll20, Foundry, Fantasy Grounds, Shmeppy, Alchemy VTT, etc.)"];
								if (vtt != "" && !vtt.startsWith("N\/A")){ 
									$( "#Slot" + slot ).append( "<p><b>VTT:</b> " + vtt + "</p>" );
								}
								
								var av = game["The default assumption is that games will use GFoJE Discord server for voice and (if using) video. If you plan on using another service (such as Zoom, Google Hangouts, etc) please list the service below."];
								if (av != "" && !av.startsWith("N\/A")){ 
									$( "#Slot" + slot ).append( "<p><b>Voice/Video:</b> " + av + "</p>" );
								}
								
								if (game["Additional Con Slot 1"] != ""){								
								$( "#Slot" + slot ).append( "<p><b>SLOTS:</b> This game covers multiple slots. In addition to the listed slot, this game also covers:<br/>" + game["Additional Con Slot 1"] + "<br/>" + game["Additional Con Slot 2"] + "</p>" ); }
								
								//Image								
								var imagelink = game["If you would like an image to accompany the details of your game, please provide a link below.\n\nPlease do not use Discord links as they expire, or links to files in Gdrive or Dropbox - the link should end with an image extension such as .jpg, .png, .webp, etc.\n\nPlease do not provide AI generated art, thanks!"];
								if (imagelink != "" && imagelink.startsWith("http")){
									if (imagelink.startsWith("https://www.dropbox.com")){
										imagelink = imagelink.replace("&dl=0", "&raw=1");
									}
									if (imagelink.startsWith("https://drive.google.com/file/d/")){
										imagelink = imagelink.replace("/view", "&sz=s1024").replace("/file/d/", "/thumbnail?id=");
									}
									$( "#Slot" + slot ).append( "<img src=\"" + imagelink + "\" style=\"max-width:300px;\" />" );
								}
								
								//End bits
								$( "#Slot" + slot ).append( "<p>" + $( "#Slot" + slot + "Header").text() + "</p>" );
								$( "#Slot" + slot ).append("<hr />");
								
								
								//Do the games by system index
								var system = game["What game system will you be running?"].replace(/\W/g, '')
								if ($("#System" + system).length < 1){
									$( "#gamesbysystem" ).append("<h2 id=\"System" + system + "Header\" class=\"wp-block-heading\">" + game["What game system will you be running?"] + "</h2>");
									$( "#gamesbysystem" ).append("<div id=\"System" + system + "\"></div>");
								}
								
								$( "#System" + system).append("<p><a href=\"/game-details/#Game" + gameId + "\">" + game["What is the title of your session?"] + " - " + game["Please select which slot you wish to run the game in.\n\nSlot times can be found on discord server: AWWGF Info"] + " - " + game["Please enter your full Discord name, copied from your Discord profile."] + "</a></p>");
								
								// Do the games by slot index
								$( "#Slot" + slot + "Index" ).append("<p><a href=\"/game-details/#Game" + gameId + "\">" + game["What game system will you be running?"] + " - " + game["What is the title of your session?"] + " - " + game["Please enter your full Discord name, copied from your Discord profile."] + "</a></p>");
	  
							}
						}
                    },
                    error: function(error) {
                        console.error('Error parsing CSV:', error);
                    }
                });
	
	if (target) {
        setTimeout(function() {
            $('html, body').animate({
				scrollTop: $(target).offset().top - 30
			}, 700, 'swing', function () {});
        }, 500);
    }
});

