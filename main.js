$(document).ready(function(){
	$('.header').height($(window).height());
})


function getDimensions(src) {
	let h = new Image()
	h.src = src
	return {width: h.width, height: h.height}
}

function percentToPx(i) {
	if(i.charAt(i.length-1) === "%") {
		return (Number(i.replace("%",""))/100)*window.innerWidth
	}
}

setInterval(()=>{
	if(document.getElementById('footer') !== null) document.getElementById('footer').style.bottom = "3%";
	if(document.getElementById('pwr1div') !== null) document.getElementById("pwr1div").style.height = getDimensions("images/capt.jpeg").height+"px"
	if(document.getElementById('pwr1') !== null) document.getElementById("pwr1").style.left = getDimensions("images/capt.jpeg").width+5+"px"
	if(document.getElementById('pwr2div') !== null) document.getElementById("pwr2div").style.height = getDimensions("images/capjump.jpeg").height+"px"
	if(document.getElementById('pwr2') !== null) document.getElementById("pwr2").style.left = getDimensions("images/capjump.jpeg").width+5+"px"
	if(document.getElementById('enm1div') !== null) document.getElementById("enm1div").style.height = getDimensions(document.getElementById("enm1img").src).height+"px"
	if(document.getElementById('enm1') !== null) document.getElementById("enm1").style.left = getDimensions(document.getElementById("enm1img").src).width+5+"px"
	if(document.getElementById('enm1') !== null) document.getElementById("enm1").style.width = percentToPx(document.getElementById("enm1div").style.width) - getDimensions(document.getElementById("enm1img").src).width+"px"
	if(document.getElementById('enm2div') !== null) document.getElementById("enm2div").style.height = getDimensions(document.getElementById("enm2img").src).height+"px"
	if(document.getElementById('enm2') !== null) document.getElementById("enm2").style.left = getDimensions(document.getElementById("enm2img").src).width+5+"px"
	if(document.getElementById('enm2') !== null) document.getElementById("enm2").style.width = percentToPx(document.getElementById("enm2div").style.width) - getDimensions(document.getElementById("enm2img").src).width+"px"
	if(document.getElementById('enm3div') !== null) document.getElementById("enm3div").style.height = getDimensions(document.getElementById("enm3img").src).height+"px"
	if(document.getElementById('enm3') !== null) document.getElementById("enm3").style.left = getDimensions(document.getElementById("enm3img").src).width+5+"px"
	if(document.getElementById('enm3') !== null) document.getElementById("enm3").style.width = percentToPx(document.getElementById("enm3div").style.width) - getDimensions(document.getElementById("enm3img").src).width+"px"
	if(document.getElementById('enm4div') !== null) document.getElementById("enm4div").style.height = getDimensions(document.getElementById("enm4img").src).height+"px"
	if(document.getElementById('enm4') !== null) document.getElementById("enm4").style.left = getDimensions(document.getElementById("enm4img").src).width+5+"px"
	if(document.getElementById('enm4') !== null) document.getElementById("enm4").style.width = percentToPx(document.getElementById("enm4div").style.width) - getDimensions(document.getElementById("enm4img").src).width+"px"
	if(document.getElementById('ali1') !== null) {
		for(let i = 1; i < 5; i++) {

			document.getElementById("ali"+i+"div").style.height = getDimensions(document.getElementById("ali"+i+"img").src).height+"px"
			document.getElementById("ali"+i).style.left = getDimensions(document.getElementById("ali"+i+"img").src).width+5+"px"
			document.getElementById("ali"+i).style.width = percentToPx(document.getElementById("ali"+i+"div").style.width) - getDimensions(document.getElementById("ali"+i+"img").src).width+"px"
		}
	}
}, 100)