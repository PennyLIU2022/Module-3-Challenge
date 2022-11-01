// Assignment code here

// Variables for each type of characters
var lowercaseEl = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseEl = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberEl = ['0','1','2','3','4','5','6','7','8','9'];
var specialEl = ['!','@','#','$','%','^','&','*','(',')','<','>','~','?','[',']']


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var chosenOptions = optionsCharset();
  var passwordText = document.querySelector("#password");

  if (chosenOptions) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Function for generate password
function generatePassword(){
  var psw = "";
  // var charset = optionsCharset();
  for (var i=0; i<passwordlength; i++){
    var randomIndex = Math.floor(Math.random()*charset.length);
    psw = psw + charset[randomIndex];
  }
  return psw;
}

//variables for options


// Function for password values based on chosen options
function optionsCharset() {
  charset = [];
  passwordlength = parseInt(prompt("How many characters do you want for your password? Please choose between 8 to 128?"))
  
  if(isNaN(passwordlength) || passwordlength<8 || passwordlength>128) {
    alert("Password length has to be a number between 8 and 128");
    return false;
  }

  var lowercase = confirm ("Do you want to have lowercase letters in your password?");
  var uppercase = confirm("Do you want to have uppercase letters in your password?");
  var number = confirm("Do you want to have numbers in your password?");
  var special = confirm("Do you want to have special characters in your password?");

  if(!lowercase == true &&
    !uppercase == true &&
    !number == true &&
    !special == true) {
      alert("None of character types is selected, please select at least one.");
      return false;
    }

  if(lowercase){
    charset = charset.concat(lowercaseEl);
  }
  if(uppercase){
    charset = charset.concat(uppercaseEl);
  }
  if(number){
    charset = charset.concat(numberEl);
  }
  if(special){
    charset = charset.concat(specialEl);
  }
  return true;

}



