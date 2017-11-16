var actual=1;
$(document).on("ready",main);

function main () {
	var intervalo= setInterval("runSlider()",3000);
}

function runSlider () {
	if (actual==$("#containerSlider img").size()) {
		actual=0;
	}

	$("#containerSlider").animate({
		marginLeft:(-1*actual*$("#containerSlider img").eq(0).width())
	},2000);
	actual++;
}