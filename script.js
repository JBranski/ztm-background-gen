let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let randomColor = document.getElementById("randomColor");
let body = document.getElementById("gradient");

document.addEventListener("DOMContentLoaded", function(){
	color1.addEventListener("input", setGradient);
	color2.addEventListener("input", setGradient);
	randomColor.addEventListener("click", genColors);

	setGradient();
});

css.addEventListener("click", function(){
	document.execCommand("copy");
});

css.addEventListener("copy", function(e){
	e.preventDefault();
	if(e.clipboardData){
		e.clipboardData.setData("text/plain", css.textContent);
	}
});

function genColors(){
	document.querySelectorAll("input").forEach(input=>input.value = "#" + Math.floor(Math.random()*16777215).toString(16));

	setGradient();
}

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	randomColor.style.background = "linear-gradient(to right, " + color2.value + ", " + color1.value + ")";

	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

