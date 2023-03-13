//This code was adaptaed from source [1]

//This variable manages which banner page is presented
var bannerStatus = 1;

//This variable specifies how long each banner page remains as the presented page
var bannerTimer = 4000;

//When the page loads, the function to start the loop cycle of the banner is called
window.onload = function(){
	bannerLoop();
	
}

//This sets up the interval variable at which each banner page is
//switched out. This interval is in the bannerTimer variable.
var startBannerLoop = setInterval(function(){
	bannerLoop();
},  bannerTimer);

//When the mouse enters the banner, the banner stops looping.
document.getElementById("news_videos").onmouseenter = function(){
	clearInterval(startBannerLoop);
}

//When the mouse leaves the banner, then banner begins to loop again.
document.getElementById("news_videos").onmouseleave = function(){
	startBannerLoop = setInterval(function(){
	bannerLoop();
},  bannerTimer);
}

//When the button to go to the previous banner page is clicked,
//depending on what the current presented page is, 
//the correct previous page is presented
document.getElementById("video_button_previous").onclick = function(){
    
    //First the banner status is set to the next one
    
	if (bannerStatus === 1){
		bannerStatus = 2;
	}
	else if (bannerStatus === 2){
		bannerStatus = 3;
	}
	else if (bannerStatus === 3){
		bannerStatus = 1;
	}
	
	//Then the bannerLoop function is called to loop around to the previous page
	bannerLoop();
}


//When the button to go to the next banner page is clicked,
//The bannerLoop function is called to go to the next page
document.getElementById("video_button_next").onclick = function(){
	bannerLoop();
}


//This loop changes the current presented page to the next one
//There is a short wait period everytime the page changes before 
//it changes again
function bannerLoop(){
    //If statements are used to check which page is being presented and depending on that page,
    //The next page is presented. This is done through the bannerStatus variable
    
    //The code for each if statement follows the same structure so I will only
    //show the logic for one of them
    
    //first check what the current status is
    
	if(bannerStatus === 1){
        
        //Then the opacity of the next page to be presented is set to 0
		document.getElementById("video_banner_2").style.opacity = "0";
        
        //All the pages are shifte to the right once then next page is now presented
        //The zIndex is also changed so that the page being presented has the 
        //highest value and the page  thats the urthest from being presented has the lowest
		setTimeout(function(){
			document.getElementById("video_banner_1").style.right = "0px";
			document.getElementById("video_banner_1").style.zIndex = "1000";
			document.getElementById("video_banner_2").style.right = "-1200px";
			document.getElementById("video_banner_2").style.zIndex = "1500";
			document.getElementById("video_banner_3").style.right = "-24000px";
			document.getElementById("video_banner_3").style.zIndex = "2000";
			document.getElementById("video_banner_4").style.right = "1200px";
			document.getElementById("video_banner_4").style.zIndex = "500";
		},  500);
		
        //The opacity of the newly presented page is set to 1 so that it is visible
		setTimeout(function(){
			document.getElementById("video_banner_2").style.opacity = "1";
		}, 1000);
		
        //The status is changed to reflect the new page being presented
		bannerStatus = 2 ;
	}
	
	//Else Do the same if it is this status
	else if(bannerStatus === 2){
		document.getElementById("video_banner_3").style.opacity = "0";
		setTimeout(function(){
			document.getElementById("video_banner_2").style.right = "0px";
			document.getElementById("video_banner_2").style.zIndex = "1000";
			document.getElementById("video_banner_3").style.right = "-1200px";
			document.getElementById("video_banner_3").style.zIndex = "1500";
			document.getElementById("video_banner_4").style.right = "-24000px";
			document.getElementById("video_banner_4").style.zIndex = "2000";
			document.getElementById("video_banner_1").style.right = "1200px";
			document.getElementById("video_banner_1").style.zIndex = "500";
		},  500);

		setTimeout(function(){
			document.getElementById("video_banner_3").style.opacity = "1";
		}, 1000);
		
		bannerStatus = 3 ;
	}
	
	//Else Do the same if it is this status
	else if(bannerStatus === 3){
		document.getElementById("video_banner_4").style.opacity = "0";
		setTimeout(function(){
			document.getElementById("video_banner_3").style.right = "0px";
			document.getElementById("video_banner_3").style.zIndex = "1000";
			document.getElementById("video_banner_4").style.right = "-1200px";
			document.getElementById("video_banner_4").style.zIndex = "1500";
			document.getElementById("video_banner_1").style.right = "-24000px";
			document.getElementById("video_banner_1").style.zIndex = "2000";
			document.getElementById("video_banner_2").style.right = "1200px";
			document.getElementById("video_banner_2").style.zIndex = "500";
		},  500);

		setTimeout(function(){
			document.getElementById("video_banner_4").style.opacity = "1";
		}, 1000);
		
		bannerStatus = 4 ;
	}
	
	//Else Do the same if it is this status
	else if(bannerStatus === 4){
		document.getElementById("video_banner_1").style.opacity = "0";
		setTimeout(function(){
			document.getElementById("video_banner_4").style.right = "0px";
			document.getElementById("video_banner_4").style.zIndex = "1000";
			document.getElementById("video_banner_1").style.right = "-1200px";
			document.getElementById("video_banner_1").style.zIndex = "1500";
			document.getElementById("video_banner_2").style.right = "-24000px";
			document.getElementById("video_banner_2").style.zIndex = "2000";
			document.getElementById("video_banner_3").style.right = "1200px";
			document.getElementById("video_banner_3").style.zIndex = "500";
		},  500);
		
		setTimeout(function(){
			document.getElementById("video_banner_1").style.opacity = "1";
		}, 1000);
		
		bannerStatus = 1 ;
	}
	
}