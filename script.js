// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //delcaration of possible password variables which contain all values needed to form password. 
 var passwordInput={lowercase:"abcdefghijklmnopqrstuvwxyz",specialcharacters: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"};

//declaration of object of functions to return password criteria 
var passwordCriteria={characternumber:function(){return this.characternumber = prompt("please enter a character value between 8 and 128")},
                  lowercase:function(){return this.lowercase =  prompt("do you wish to include lowercase values" + "\r\n" + "Please enter yes or no")}, 
                  uppercase:function(){return this.uppercase = prompt("do you wish to include Uppercase values"+ "\r\n" + "Please enter yes or no")},
                  specialcharacters:function(){return this.specialcharacters = prompt("do you wish to include special characters"+ "\r\n" + "Please enter yes or no")}}

//this array below executes all the functions in the above object and is filled with values returned
var passwordCriteriaConfirmed = [passwordCriteria.characternumber(), passwordCriteria.lowercase(), passwordCriteria.uppercase(), passwordCriteria.specialcharacters() ]

var password = [];

if (passwordCriteriaConfirmed[1] ==="yes" && passwordCriteriaConfirmed[0] < 128 && passwordCriteriaConfirmed >8){
  for (i = 0; i < passwordCriteriaConfirmed[0]; i++) {
    var x = Math.floor(Math.random()*passwordInput.lowercase.length)
    var password=password + passwordInput.lowercase[x];
 
}
}
  if(passwordCriteriaConfirmed[2] === "yes" && passwordCriteriaConfirmed[0] < 128 && passwordCriteriaConfirmed >8){
    for (i = 0; i < passwordCriteriaConfirmed[0]; i++) {
      var randomBoolean = Math.random() >= 0.5;
      if (randomBoolean){
        password = password.replaceAt(i, password[i].toUpperCase());       
        //console.log("hello",password[i])
      }
    }
  }

  if(passwordCriteriaConfirmed[3] === "yes" && passwordCriteriaConfirmed[0] < 128 && passwordCriteriaConfirmed >8){
    for (i = 0; i < passwordCriteriaConfirmed[0]; i++) {
      var randomBoolean = Math.random() >= 0.5;
      if (randomBoolean){
        var y = Math.floor(Math.random()*passwordInput.specialcharacters.length)
        var z = passwordInput.specialcharacters[y]
        password = password.replaceAt(i, z);       
        //console.log("hello",password[i])
      }
    }

  }
  else {
    alert("error. please try again")
    }
 




console.log(password)

 
 


var password = "text"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



String.prototype.replaceAt = function(index, replacement) {
	if (index >= this.length) {
		return this.valueOf();
	}

	return this.substring(0, index) + replacement + this.substring(index + 1);
}





/*
	Output: Hello_World
*/