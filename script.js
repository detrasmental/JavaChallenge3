// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
   
    var password = generatePassword();
    var passwordShow = document.querySelector("#password");

    passwordShow.value = password;
    document.getElementById("lastNums").innerHTML +=password + "<br />";
}

function copyPassword(){
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard")
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





   
    var specialChar = false;
    var numericChar = false;
    var uppercaseChar = false;
    var lowcaseChar = false;
    var setOfKeys = "";
    var lowcaseSet = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericSet = "0123456789";
    var specialSet = "!@#$%^&*()-_+{}[ ]";
    var passwordUnique = "";
    var randomsymbolsStr = "";
    var randomePos = 0;
     


    // asks the user if they want to use uppercase letters
    while ((!lowcaseChar) && (!uppercaseChar) && (!numericChar) && (!specialChar)) {
        alert("Choose at least one of the following options for your password")
        uppercaseChar = confirm("Would you like to use uppercase letters for your password?");
        if (uppercaseChar) {
            setOfKeys = setOfKeys + uppercaseSet;
            randomsymbolsStr = randomsymbolsStr + getRandomSymbol(uppercaseSet);
        }
        // asks the user if they want to use lowercase letters
        lowcaseChar = confirm("Would you like to use lowercase letters for your password?")
      if (lowcaseChar) {
          setOfKeys = setOfKeys + lowcaseSet;
          randomsymbolsStr =  randomsymbolsStr + getRandomSymbol(lowcaseSet);
      }
        // asks the user if they want to use special characters
        specialChar = confirm("Would you like to use special characters for your password?");
      if (specialChar) {
          setOfKeys = setOfKeys + specialSet;
          randomsymbolsStr = randomsymbolsStr + getRandomSymbol(specialSet);
      }
        // asks the user if they want to use numbers
        numericChar = confirm("Would you like to use numbers for your password?");
        if (numericChar) {
            setOfKeys = setOfKeys + numericSet;
            randomsymbolsStr = randomsymbolsStr + getRandomSymbol(numericSet);
        }
    }
    
    
    
    randomePos = Math.floor(Math.random() * (passlength - randomsymbolsStr.length));
    for (var i = 0; i <= passlength - randomsymbolsStr.length; i++) {
        if (i === randomePos) {
            passwordUnique = passwordUnique + randomsymbolsStr;
        }
        passwordUnique = passwordUnique + getRandomSymbol(setOfKeys);
    }
  
    return passwordUnique;
     
}
function getRandomSymbol(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

