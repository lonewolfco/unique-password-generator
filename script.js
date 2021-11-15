// Generate Button
var generateBtn = document.querySelector("#generate");

// declare variables for password context
var numbers = [0,1,2,3,4,5];
var lowerCase = ["a","b","c"];
var upperCase = ["A","B","C"]
var specialCharacter = ["!","?","(","&"];


// function when generate is clicked (?)
function generatePassword () {
  
  var password = "";
  console.log("create a password");
  var passwordLength = prompt("Enter a password length between 8 and 128");
  var isNumbers = confirm("Click OK to include Numbers in your password");
  var isLowerCase = confirm("Click OK to include lowercase letters in your password");
  var isUpperCase = confirm("Click OK to include UPPERCASE letters in your password");
  var isSpecialCharacter = confirm("Click OK to include special characters letters in your password");

  if (isNumbers && isLowerCase) {
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * numbers.length);
      var randomLowerCase = Math.floor(Math.random() * lowerCase.length);
      password += (randomNumber, randomLowerCase, randomNumber +1);
    }
    
  } else { 
    password += "a";
    password +="?";
    
  }

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

// Math.floor(math.random()*numbers.length)
// if (confirm("Would you like numbers in your password?")) {
//   txt = "Great - let's add numbers";
// } else {
//   txt = "You pressed Cancel!";
// }