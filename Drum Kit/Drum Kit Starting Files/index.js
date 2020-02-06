// function clicked(){
// 	alert("clicked");
// }

// document.querySelector("button").addEventListener("click",clicked);



var banyakdata = document.querySelectorAll(".drum").length;
for (var i = 0 ; i<banyakdata;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
	//alert("i got clicked")
	var databutton = this.innerHTML;
	suara(databutton);
	}
	);
}
document.addEventListener("keypress",function(event){
	suara(event.key);
});

function suara(databutton){
	switch (databutton){
	case "w" : 
		var tom1 = new Audio("sounds/tom-1.mp3");
		tom1.play();
		break; 
	case "a" : 
		var tom2 = new Audio("sounds/tom-2.mp3");
		tom2.play();
		break; 
	case "s" : 
		var tom3 = new Audio("sounds/tom-3.mp3");
		tom3.play();
		break; 
	case "d" : 
		var crash = new Audio("sounds/crash.mp3");
		crash.play();
		break;
	case "j" : 
		var tom4 = new Audio("sounds/tom-4.mp3");
		tom4.play();
		break; 
	case "k" : 
		var snare = new Audio("sounds/snare.mp3");
		snare.play();
		break;
	case "l" : 
		var kick = new Audio("sounds/kick-bass.mp3");
		kick.play();
		break;  
	}
}
