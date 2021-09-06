// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// generatePassword function should be below
function generatePassword() {

    var validator = false;
    var passlength = 0;
   
    while (!validator) {
        passlength = parseInt(prompt("Please enter a password length between 8-128 characters"));
       
       
        if (!isNaN(passlength)) {
            
            if ((passlength < 8) || (passlength > 128)) {
                alert("Sorry, number entered is not in range. Please try again");
            }
            else {
                validator = true;
            }
        }
        else {
            alert("Sorry, that is not a valid a number. Please try again");
        }
    }
   
    var specialChk = false;
    var numericChk = false;
    var uppercaseChk = false;
    var lowcaseChk = false;
    var setOfKeys = "";
    var lowcaseSet = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericSet = "0123456789";
    var specialSet = "!@#$%^&*()-_+{}[ ]";
    var passwordHolder = "";
    var randomsymbolsStr = "";
    var randomePos = 0;


    // asks the user if they want to use uppercase letters
    while ((!lowcaseChk) && (!uppercaseChk) && (!numericChk) && (!specialChk)) {
        alert("Choose at least 1 of the following options for the password")
        uppercaseChk = confirm("Would you like to use uppercase letters for your password?");
        if (uppercaseChk) {
            setOfKeys = setOfKeys + uppercaseSet;
            randomsymbolsStr = randomsymbolsStr + getRandomSymbol(uppercaseSet);
        }
        // asks the user if they want to use lowercase letters
        lowcaseChk = confirm("Would you like to use lowercase letters for your password?")
      if (lowcaseChk) {
          setOfKeys = setOfKeys + lowcaseSet;
          randomsymbolsStr =  randomsymbolsStr + getRandomSymbol(lowcaseSet);
      }
        // asks the user if they want to use special characters
        specialChk = confirm("Would you like to use special characters for your password?");
      if (specialChk) {
          setOfKeys = setOfKeys + specialSet;
          randomsymbolsStr = randomsymbolsStr + getRandomSymbol(specialSet);
      }
        // asks the user if they want to use numbers
        numericChk = confirm("Would you like to use numbers for your password?");
        if (numericChk) {
            setOfKeys = setOfKeys + numericSet;
            randomsymbolsStr = randomsymbolsStr + getRandomSymbol(numericSet);
        }
    }
    
    
    
    randomePos = Math.floor(Math.random() * (passlength - randomsymbolsStr.length));
    for (var i = 0; i < passlength - randomsymbolsStr.length; i++) {
        if (i === randomePos) {
            passwordHolder = passwordHolder + randomsymbolsStr;
        }
        passwordHolder = passwordHolder + getRandomSymbol(setOfKeys);
    }
  
    return passwordHolder;
   
  
}
function getRandomSymbol(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);