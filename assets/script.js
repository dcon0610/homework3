// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //delcaration of possible password variables which contain all values needed to form password - lower case, special characters. Upper case can be defined by a function, later. 
 var passwordInput={lowercase:"abcdefghijklmnopqrstuvwxyz",specialcharacters: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"};

//declaration of object of functions to return password criteria. The do while loop ensures that if either the incorrect number of characters was chosen, or no viable character options
//were chosen, the browser will prompt the user to try again and tell the user what the problem was. 

do {
  var passwordCriteria={characternumber:function(){return this.characternumber = prompt("please enter a character value between 8 and 128")},
                        lowercase:function(){return this.lowercase =  confirm("do you wish to include lowercase values " +"\n"+"press ok if yes, cancel if no")}, 
                        uppercase:function(){return this.uppercase = confirm("do you wish to include Uppercase values" +"\n"+"press ok if yes, cancel if no")},
                        specialcharacters:function(){return this.specialcharacters = confirm("do you wish to include special characters" +"\n"+"press ok if yes, cancel if no")}}
                  
  //this collects all the values from the prompts and confirms in the previous object and takes them into an array. 
  var passwordCriteriaConfirmed = [passwordCriteria.characternumber(), passwordCriteria.lowercase(), passwordCriteria.uppercase(), passwordCriteria.specialcharacters() ]

  //tests to ensure the characters are within the allowed boundaries, sends true to passwordBoolean if they are, returns please enter the correct number of values if not
  if(passwordCriteria.characternumber<128 && passwordCriteria.characternumber>8) {
    var passwordBoolean=true
  } 
  else {
    alert("please enter the correct number of values")
    passwordBoolean=false
  }

  //this tests whether any of the conditions of the array have been selected, if so, it returns true to setCharacterBoolean. if not, returns an alert. 
  //passwordCriteriaConfirmed[1] is the confirm for lower case characters, passwordCriteriaConfirmed[2] the confirm for the upper case characters 
  //and passwordCriteriaConfirmed[3] for the special characters. 
  if(passwordCriteriaConfirmed[1] ===true || passwordCriteriaConfirmed[2] ===true|| passwordCriteriaConfirmed[3] ===true){
    var characterBoolean=true
  }
  else {
    alert("please enter one condition as true")
    characterBoolean=false
  }

}
while (passwordBoolean===false || characterBoolean===false)

//initialises an empty string which will contain each of the possible characters sets chosen by the user. 
passwordSelectionArray=""

//if the user has made a correct election in the length, and picked at least one character. 
if( characterBoolean===true  && passwordBoolean===true) { 
//if the user has selected lower case letters, add them to the list
  if (passwordCriteriaConfirmed[1] ===true) {
    passwordSelectionArray=passwordSelectionArray + passwordInput.lowercase
  }

 //if the user has selected upper case letters, add them to the list
  if (passwordCriteriaConfirmed[2] ===true) {
    passwordSelectionArray=passwordSelectionArray + passwordInput.lowercase.toUpperCase()
  }

 //if the user has selected special characters, add them to the list
  if (passwordCriteriaConfirmed[3] ===true) {
    passwordSelectionArray=passwordSelectionArray + passwordInput.specialcharacters
  }
}

//initialise the password as an empty string
password=""

//loop over the length of the password, find a random number, convert it to a character from the passwordSelectionArray string using "charAt"
//return the character to the password until the password length filled
  for (i=0; i<passwordCriteria.characternumber; i++ ) {
    var randomNumber = Math.floor(Math.random()*passwordSelectionArray.length)
    var character=passwordSelectionArray.charAt(randomNumber)
    password=password+character
  }

//return password to HTML
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
