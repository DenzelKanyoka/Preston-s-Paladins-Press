//When the submit button is clicked, the first name,
//last name and email sections are checked for valid input

document.getElementById("message_button").onclick = function(){
    
	//These variables are used to help check if the email address given is valid
    
    //This stores the number of times the @ symbol appears in the email
	var at_symbol_count = 0;
    //This stores the position of the last @ symbol that appears in the email
	var at_symbol_position = 0;
    //This stores the username section of the email address
	var username;
    //This stores the domain section of the email address without the @ symbol
	var domain;
    //This stores the position of the first "." that appears in the email
	var domain_point_position = 0;
	
	//If the first name input box is empty the user is alerted of it
	if (document.getElementById("first_name").value == ""){
		alert("Please enter your first name");
	}
	
    //If the last name input box is empty the user is alerted of it
	if (document.getElementById("last_name").value == ""){
		alert("Please enter your last name")
	}
    
    //If the email input box is empty the user is alerted of it
	if (document.getElementById("email").value == ""){
		alert("Please enter your email address")
	}
	
	//This for loop counts the number of times the @ symbol appears in the email
    //and stores it in the at_symbol_count variable. It aslo stores the
    //position of the last @ symbol in the email and stores it in the 
    // at_symbol_position variable
	for(var i = 0 ; i < document.getElementById("email").value.length ; i++){
		if (document.getElementById("email").value[i] == "@"){
			at_symbol_count = at_symbol_count + 1;
			at_symbol_position = i;
		}
	}
	
	
	//If the number of times that the @ symbol appears is not equal to 1 then
    //it is not considered valid and the user is alerted as such.
	if(at_symbol_count != 1){
		alert("invalid use of the @ symbol in the email address");
	}
    
    //Otherwise it is equal to 1 and was used correctly and the following occurs below
	else{
        //The username section of the email is taken and stored in the username variable
		username = document.getElementById("email").value.slice(0,at_symbol_position);
		
        //Then the domain section of the email excluding the @ symbol is
        //stored in the domain variable
		domain = document.getElementById("email").value.slice(at_symbol_position + 1,document.getElementById("email").value.length);
		
	}
	
    //If the email does not have a username, then it the email is 
    //invalid and the user is alerted as such
	if (username == ""){
		alert("invalid username in the email address");
	}
	
    //The position of the first "." to appear is stored
    //in the variable domain_point_position
	domain_point_position = domain.indexOf(".");
	
    
    //If no "." is present
    //OR
    //The "." is at the very begining
    //OR
    //The "." is at the end
    //Then
    //The domain cannot be valid and the user is alerted as such
	if (domain_point_position == -1 || domain_point_position == 0 || domain_point_position == domain.length - 1){
		alert("invalid domain in the email address");
	}
	
	
	
	
	
}