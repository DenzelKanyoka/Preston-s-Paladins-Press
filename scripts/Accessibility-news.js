//The two variable below check the state of whether or not the accesibility option is turned on or not

// This one checks to see if the "Bigger font size" option is turned on or not
// false means the option is turned off and true means the option is turned on
var size_toggle = false;

// This one checks to see if the "Readable font" option is turned on or not
// false means the option is turned off and true means the option is turned on
var family_toggle = false;

//The following are arrays containg html elements of a certain tag

// The three below contain arrays of <h1> , <h2> and <3> elements respectively
var headings_1;
var headings_2;
var headings_3;

//This array is for <p> elements
var paragraphs;
//This array is fo <a> elements
var links;


 //First the arrays are filled with their needed tag elements
    headings_1 =    document.getElementsByTagName("h1");
    headings_2 =    document.getElementsByTagName("h2");
    headings_3 =    document.getElementsByTagName("h3");
    paragraphs =    document.getElementsByTagName("p");
    links      =    document.getElementsByTagName("a");


//When the readable text button is clicked, It first checks the state of the
//family_toggle and calls the relavant function to turn on or off the accessibility option
document.getElementById("readable_text_button_news").onclick = function(){
    
    // If the accessibility option was off at the time of the click, It is then turned on
    //and the function resposible for applying the accessibility feature is called
   if (family_toggle == false){
       family_toggle = true;
       family();
   }

    //Otherwise it means that the accessibility option was on at the time of
    //the click and is then turned off and the function responsble for undoing the 
    //accessibility changes is called  
    else {
        family_toggle = false;
        family_undo();
    }
    
    
}

//When the Toggle font size button is clicked, It first checks the state of the
//size_toggle and calls the relavant function to turn on or off the accessibility option
document.getElementById("font_size_news").onclick = function(){
    
     // If the accessibility option was off at the time of the click, It is then turned on
    //and the function resposible for applying the accessibility feature is called
    if (size_toggle == false){
       size_toggle = true;
       size();
   }
    
    //Otherwise it means that the accessibility option was on at the time of
    //the click and is then turned off and the function responsble for undoing the 
    //accessibility changes is called 
    else {
        size_toggle = false;
        size_undo();
    }
}

//This function changes the font family of most of the elemnts to Jura so
//that the text is more readable.
function family(){
    
   
    
    //A for loop is called for each array to change the font family
    //for each of their elements to Jura
    for (var i = 1 ; i < headings_1.length - 1; i++){
        headings_1[i].style.fontFamily = "Jura"
    }
    for (var i = 0 ; i < headings_2.length ; i++){
        headings_2[i].style.fontFamily = "Jura"
    }
    for (var i = 0 ; i < headings_3.length ; i++){
        headings_3[i].style.fontFamily = "Jura"
    }
    for (var i = 0 ; i < paragraphs.length ; i++){
        paragraphs[i].style.fontFamily = "Jura"
    }
    for (var i = 0 ; i < links.length ; i++){
        links[i].style.fontFamily = "Jura"
    }
    
  
}

//This function undos the changes made by the previous function
function family_undo(){
    
  
    
    //A for loop is called for each array to change the font family
    //for each of their elements to Sofia, which was the initial font family
    for (var i = 1 ; i < headings_1.length - 1 ; i++){
        headings_1[i].style.fontFamily = "Sofia"
    }
    for (var i = 0 ; i < headings_2.length ; i++){
        headings_2[i].style.fontFamily = "Sofia"
    }
    for (var i = 0 ; i < headings_3.length ; i++){
        headings_3[i].style.fontFamily = "Sofia"
    }
    for (var i = 0 ; i < paragraphs.length ; i++){
        paragraphs[i].style.fontFamily = "Sofia"
    }
    for (var i = 0 ; i < links.length ; i++){
        links[i].style.fontFamily  = "Sofia"
    }
    

        
}


//This function changes the font size of most elements so that
//the text is more readable
function size(){

    //A for loop is called for each array to increase the font size
    //for each of their elements 
    for (var i = 1 ; i < headings_1.length - 1; i++){
        headings_1[i].style.fontSize = "45px";
    }
    for (var i = 0 ; i < headings_2.length ; i++){
        headings_2[i].style.fontSize = "40px";
    }
    for (var i = 0 ; i < headings_3.length ; i++){
        headings_3[i].style.fontSize = "20px";
    }
    for (var i = 0 ; i < paragraphs.length ; i++){
        paragraphs[i].style.fontSize = "30px";
    }
    for (var i = 5 ; i < links.length ; i++){
        links[i].style.fontSize = "20px";
    }
    

}

//This function undos the changes made by the previous function
function size_undo(){
    
    
    //A for loop is called for each array to decreas the font size
    //for each of their elements back to their initial values
    for (var i = 1 ; i < headings_1.length - 1 ; i++){
        headings_1[i].style.fontSize = "40px";
    }
    for (var i = 0 ; i < headings_2.length ; i++){
        headings_2[i].style.fontSize = "30px";
    }
    for (var i = 0 ; i < headings_3.length ; i++){
        headings_3[i].style.fontSize = "20px";
    }
    for (var i = 0 ; i < paragraphs.length ; i++){
        paragraphs[i].style.fontSize = "20px";
    }
    for (var i = 5 ; i < links.length ; i++){
        links[i].style.fontSize = "15px";
    }
    
    

}

                                