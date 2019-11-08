
function generate() {

    var charSize = prompt("Choose your password length between 8 and 128 charcaters");


    if (charSize < 8) {
        alert("Try another character length");
        charSize = prompt("Choose your password length between 8 and 128 charcaters");

    } else if (charSize > 128) {
        alert("Try another character length");
        charSize = prompt("Choose your password length between 8 and 128 charcaters");

    }

    console.log(charSize);

    var hasUpperCase = confirm("Do you want to add 'uppercase letters' to your password?");
    var hasLowerCase = confirm("Do you want to add 'lowercase letters' to your password?");
    var hasNumChar = confirm("Do you want to add 'numbers' to your password?");
    var hasSpecChar = confirm("Do you want to add 'special characters' to your password?");

    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specChar = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "~", "?"];

    // 
    var availableCharacter = [];
    if (hasUpperCase === true) {
        availableCharacter = upperCase.concat(availableCharacter);
    }
    if (hasLowerCase === true) {
        availableCharacter = lowerCase.concat(availableCharacter);
    }
    if (hasNumChar === true) {
        availableCharacter = numChar.concat(availableCharacter);
    }
    if (hasSpecChar === true) {
        availableCharacter = specChar.concat(availableCharacter);
    }



    var password = "";

    for (let index = 0; index < charSize; index++) {
        var character = availableCharacter[Math.round(Math.random() * (availableCharacter.length - 1))];
        password = password + character;
    }

    console.log(password);

    document.getElementById("generate").addEventListener("click", myFunction);

    document.addEventListener("click", myFunction)


    function myFunction() {
        document.getElementById("password").innerHTML = password;
    }

    // console.log(myFunction);

}

generate();

// document.getElementById("copy").addEventListener("click", myFunctionCopy);
// document.addEventListener("click", myFunctionCopy);

// alert("password copied to clipboard!:" + copy.value);

// console.log(copy);


// function myFunctionCopy() {
//     /* Get the text field */
//     var copy = document.getElementById("password");

//     copy.select();

//     /* Copy the text inside the text field */
//     document.execCommand("copy to clipboard");

//     /* Alert the copied text */
//     // alert("password copied to clipboard!:" + copy.value);
//     console.log(this);
// }
// console.log(myFunctionCopy);

document.getElementById("copytoclipboard").addEventListener("click", myCopyFunction);
document.addEventListener("click", myCopyFunction);

function myCopyFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 999)
    document.execCommand("copy");
    function mycopyfunction2(){
        if(document.execCommand = true){
    alert("Copied the text: " + copyText.value);}
  }
}
  myCopyFunction();
  