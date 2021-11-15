// Generate Button
var generateBtn = document.querySelector("#generate");

// declare variables for password characters
var numbers = [0,1,2,3,4,5];
var lowerCase = ["a","b","c"];
var upperCase = ["A","B","C"]
var specialCharacter = ["!","?","(","&"];


// function for creating the password
function generatePassword () {
  
  // password variable with empty string that is filled later in this function
  var password = "";
  console.log("create a password");

  // prompt to choose a password length held inside a var
  var passwordLength = prompt("Enter a password length between 8 and 128");
  
  // start of if else statements

  // if password length is between 8 and 128.. continue on
  if (passwordLength >= 8 && passwordLength <=128 ) {
    var isNumbers = confirm("Click OK to include Numbers in your password");
    var isLowerCase = confirm("Click OK to include lowercase letters in your password");
    var isUpperCase = confirm("Click OK to include UPPERCASE letters in your password");
    var isSpecialCharacter = confirm("Click OK to include special characters letters in your password");
        
    // Numbers Only
        if (isNumbers && !isLowerCase && !isUpperCase) {

          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * numbers.length);
            password += (randomNumber);
          }
          console.log(password);

        // LowerCase Only
        } else if (!isNumbers && isLowerCase && !isUpperCase) {
            for (var i = 0; i <= passwordLength; i++) {
              var randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
              password += (randomLowerCase);
            }
            console.log(password);
         
        // UpperCase Only
        } else if (!isNumbers && !isLowerCase && isUpperCase) {
            for (var i = 0; i <= passwordLength; i++) {
              var randomUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
              password += (randomUpperCase);
            }
            console.log(password);   

        // Special Character Only
        } else if (!isNumbers && !isLowerCase && !isUpperCase && isSpecialCharacter) {
            for (var i = 0; i <= passwordLength; i++) {
              var randomSpecialCharacter = specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
              password += (randomSpecialCharacter);
            }
            console.log(password);

          // Numbers & LowerCase Only
        } else if (isNumbers && isLowerCase) {
          for (var i = 0; i <= passwordLength/2; i++) {
            var randomNumber = Math.floor(Math.random() * numbers.length);
            var randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
            password += (randomNumber);
            password += (randomLowerCase);
          }
          console.log(password);

        }

    // if password length entered in prompt by user is not within 8 and 128, throw alert prompt of invalid entry and return to start
    } else {
        alert("Invalid Entry -- Pick a number between 8 and 128");
        return;
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
