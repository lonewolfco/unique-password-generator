// Generate Button
var generateBtn = document.querySelector("#generate");

// declare variables for password characters
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());
  var specialCharacter = ["!","?","(","&"];




// function for creating the password
function generatePassword () {
      
      // empty password  variable that is filled later in this function
      var password = [];
      // empty passwordArray variable that the characters will be concated into
      var passwordArray = [];
      console.log("create a password");

      // prompt to choose a password length held inside a var
      var passwordLength = prompt("Enter a password length between 8 and 128");
      
      

      // if user input does not meet requirements for a number between 8 & 128 or inputs a value that is not a number.. alert windows will appear
      if (passwordLength < 8 ) {
        alert("🚫 Invalid Password Length 🚫 \n👉 Password cannot be less than 8 characters\n👉 Pick a number between 8 and 128");
            return;
      }  else if (passwordLength > 128 ) {
        alert("🚫 Invalid Password Length 🚫 \n👉 Password cannot be greater than 128 characters\n👉 Pick a number between 8 and 128");
            return;
      } else if (isNaN(passwordLength)) {
        alert("🚫 Invalid Entry 🚫 \n👉 Pick a number between 8 and 128");
            return;
    // if user inputs a value between 8 and 128, overcommunicate value entered
    } else if (passwordLength >= 8 && passwordLength <=128 ) {
        alert("✅ The generator will create a unique password that is " + passwordLength + " characters long\n👉 Choose character types next...")
      }

      // variables whose value is a confirm popup to allow the user to input preferance of character type the password generator should utilize
      var isNumbers = confirm("Click OK to include Numbers in your password");
      var isLowerCase = confirm("Click OK to include lowercase letters in your password");
      var isUpperCase = confirm("Click OK to include UPPERCASE letters in your password");
      var isSpecialCharacter = confirm("Click OK to include special characters letters in your password");
      
      // If the user selects OK for isNumbers confirm
      if (isNumbers) {
          passwordArray = passwordArray.concat(numbers);
          console.log(passwordArray);   

      // If the user selects OK for isNumbers confirm
      } if (isLowerCase) {
          passwordArray = passwordArray.concat(lowerCase);
          console.log(passwordArray); 

      // UpperCase Only
        } if (isUpperCase) {
            passwordArray = passwordArray.concat(upperCase);
            console.log(passwordArray);   

      // Special Character Only
        } if (isSpecialCharacter) {
            passwordArray = passwordArray.concat(specialCharacter);
            console.log(passwordArray);  

        } if (!isNumbers && !isLowerCase && !isUpperCase && !isSpecialCharacter) {
            alert("💀 No Character Types Selected 💀 \n 👉 Please Try again");
            return;
        
      // For Loop to randomize the password characters based on the user input for password length
        } if (passwordArray.length > 0) {
            for (var i = 0; i < passwordLength; i++) {
                var randomizedPassword = passwordArray[Math.floor(Math.random() * passwordArray.length)];
                password += (randomizedPassword); }

            console.log(randomizedPassword);
            console.log(password);
            return password;
        }
}


// Write password to the #password input
function writePassword() {
  // redeclare password var in the global scope
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
