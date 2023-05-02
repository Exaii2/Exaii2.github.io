var iframeLink = "unity/webgl";
var webGLloadButton;
var iframeHolder;
var parallaxX, parallaxY;

window.onload = function() {
	const parallax = document.querySelector("#parallax_1");
	// webGLInit(); // TODO: Clean up webgl code
	// initUnityLoad(); // Build Unity Web Showcase.

	setTimeout(function() {
	afterLoadM(); }, 1001);
}

function afterLoadM()
{
	// Simple bot crawler prevention.
	var u = 'voegtle.adrian',
    d = 'gm',
	e = 'ail',
	pre = 'm',
	pre2 = 'to:';

	ma1il = document.querySelector("#cont-m");
	ma2il = document.querySelector("#cont-m-2");

	ma1il.href = pre + e + pre2 + u + '@' + d + e + '.com';
	ma2il.href = pre + e + pre2 + u + '@' + d + e + '.com';
	ma2il.innerHTML = u + '@' + d + e + '.com';
}

/// Use this to load my unity web showcase
/*
function initUnityLoad() {
	webGLloadButton = $("#loadWebGL");
	iframeHolder = $("#unity-loader");
	
	document.getElementById("loadWebGL").addEventListener("click", function() {
		// var iframeLink = document.createElement("iframe");
		var iframeLink = "unity/index.html";

		var iframe = $("<iframe src='" + iframeLink + "'></iframe>");
		iframeHolder.append(iframe);

		webGLloadButton.removeClass("active");
	});
}
*/