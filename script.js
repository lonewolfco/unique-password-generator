// Generate Button
var generateBtn = document.querySelector("#generate");

// declare variables for password characters
// var characters = {
  var numbers = ["0","1","2","3","4","5"];
  var lowerCase = ["a","b","c"];
  var upperCase = ["A","B","C"];
  var specialCharacter = ["!","?","(","&"];




// function for creating the password
function generatePassword () {
      
      // password variable with empty string that is filled later in this function
      var finalPassword = "";
      var passwordString = [];
      console.log("create a password");

      // prompt to choose a password length held inside a var
      var passwordLength = parseInt(prompt("Enter a password length between 8 and 128"));
      
      // start of if else statements

      // if password length is between 8 and 128.. continue on
      if (passwordLength <= 8 && passwordLength >= 128 ) {
        

      } 
      var isNumbers = confirm("Click OK to include Numbers in your password");
      var isLowerCase = confirm("Click OK to include lowercase letters in your password");
      var isUpperCase = confirm("Click OK to include UPPERCASE letters in your password");
      var isSpecialCharacter = confirm("Click OK to include special characters letters in your password");
      
        // Numbers Only
      if (isNumbers === true) {
              passwordString = passwordString.concat(numbers);

              console.log(passwordString);   

            // LowerCase Only
         } if (isLowerCase === true) {
              passwordString = passwordString.concat(lowerCase);

              console.log(passwordString); 

            // UpperCase Only
            } if (isUpperCase === true) {
              passwordString = passwordString.concat(upperCase);
            
                console.log(passwordString);   

            // Special Character Only
            } if (isSpecialCharacter === true) {
              passwordString = passwordString.concat(specialCharacter);
                console.log(passwordString);   

              } if (passwordString.length > 0) {
                for (var i = 0; i < passwordLength; i++) {
                   var passwordIndex = [Math.floor(Math.random() * passwordString.length)];
                    finalPassword += (passwordIndex);

                    console.log(passwordString);
                  }

        // if password length entered in prompt by user is not within 8 and 128, throw alert prompt of invalid entry and return to start
        } else {
            alert("Invalid Entry -- Pick a number between 8 and 128");
            return;
        } 

      return finalPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
