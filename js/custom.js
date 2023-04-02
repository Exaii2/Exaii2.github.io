var iframeLink = "unity/webgl";
var webGLloadButton;
var iframeHolder;
var parallaxX, parallaxY;

window.onload = function() {
	const parallax = document.querySelector("#parallax_1");
	// webGLInit(); // TODO: Clean up webgl code

	initUnityLoad(); // Build Unity Web Showcase.

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


/*
// THIS PART IS FOR WEBGL.
function webGLInit()
{
	const canvas = document.querySelector("#glCanvas");
	// Initialize the GL context
	const gl = canvas.getContext("webgl2");
	// Only continue if WebGL is available and working
	if (gl === null) {
		alert("Unable to initialize WebGL. Your browser or machine may not support it.");
		return;
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	var background = new Image();
		background.src = "/img/imageSrc.png";
		background.onload = function(){
			ctx.drawImage(background,0,0);   
	}
}

// Initialize a shader program, so WebGL knows how to draw our data
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

// creates a shader of the given type, uploads the source and compiles it.
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object
  gl.shaderSource(shader, source);

  // Compile the shader program
  gl.compileShader(shader);

  // See if it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
*/