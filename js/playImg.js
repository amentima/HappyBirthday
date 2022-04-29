
var btn = document.getElementById("heartTxt");
let vid = document.getElementById("vid");
let audio = document.getElementById("audio");
let play_vid_btn = document.getElementById("play_vid_btn");
let play_vid_btn_cont = document.getElementById("play_vid_btn_cont");
btn.style.opacity = 0;
var btnVal = 0;
let showInterval ;


window.onload = () =>{
	setTimeout(() => {
		audio.play()
	}, 1000);
}

function showImage(){

	if(imageIndex <= len){

			//document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	//document.getElementById("imgTxt").style.opacity = 1 - flag;
	imageIndex++;

	}else if(imageIndex >= len){
		clearInterval(showInterval);
		myImage.style.display = "none"
		myTxt.style.display = "none"
		
		imageIndex = 0;
		play_vid_btn_cont.style.display = "flex"
		play_vid_btn.addEventListener("click",()=>{
			play_vid_btn_cont.style.display = "none"
			vid.style.display = "flex"
			audio.muted = true
			vid.children[0].play();

		})
	}



}

function play(){





	if(t == 0){
		myImage.setAttribute("src", "");
		myTxt.innerHTML = "";
		imageIndex = 0;
		clearInterval(showImageInterval);
	}
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if(t == 0){
		//setTimeout(showImage, 1000);
		// setInterval(showImage, 2500);
		 showInterval = setInterval(showImage, 2500);
	}
	t++;
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event(){

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
