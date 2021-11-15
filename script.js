// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare variables for password context
var numbers = [0,1,2,3,4,5];
var lowerCase = ["a","b","c"];
var upperCase = ["A","B","C"]
var specialCharacter = ["!","?","(","&"];

var passwordLength = 12;
var isNumbers = true;
var isLowerCase = true;
var isUpperCase = true;
var isSpecialCharacter = true;

// function when generate is clicked (?)
function generatePassword () {
  var password = "0!b3";
  console.log("create a password");

  // loop until password is desired length (?)
  password += "a";
  password+="?";
  
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
