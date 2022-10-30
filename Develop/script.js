// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Variables for each type of characters
var lowercaseEl = "abcdefghigklmnopqrstuvwxyz";
var uppercaseEl = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
var numberEl = "0123456789";
var specialEl = "\ \\\"!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Options for password
var passwordlength = prompt("How many characters you want between 8 to 128?");
var lowercase = confirm ("Do you want to have lowercase letters in your password?");
var uppercase = confirm("Do you want to have uppercase letters in your password?");
var number = confirm("Do you want to have numbers in your password?");
var special = confirm("Do you want to have special characters in your password?");

// Function for password values
function optionsCharset() {
  var charset = "";
  if(lowercase){
    charset += lowercaseEl;
  }
  if(uppercase){
    charset += uppercaseEl;
  }
  if(number){
    charset += numberEl;
  }
  if(special){
    charset += specialEl;
  }
  return charset
}

// Function for generate password
function generatePassword(){
  var psw = "";
  var charset = optionsCharset();
  for (var i=0; i<passwordlength; i++){
    randomcharset = charset[Math.round(Math.random()*charset.length)];
    psw += randomcharset
  }
  return psw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
