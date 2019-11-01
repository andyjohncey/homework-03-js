
function generate() {

var charSize = prompt("Choose your password length between 8 and 128 charcaters");



if (charSize < 8) {
    alert("Try another character length");
    charSize = prompt("Choose your password length between 8 and 128 charcaters");

} else if (charSize > 128) {
    alert("Try another character length");
    charSize = prompt("Choose your password length between 8 and 128 charcaters");

} else;



console.log(charSize);


    varupperCase = confirm("Do you want to add 'upercase letters' to your password?");
    varlowerCase = confirm("Do you want to add 'lowercase letters' to your password?");
    varnumChar = confirm("Do you want to add 'numbers' to your password?");
    varspecChar = confirm("Do you want to add 'special characters' to your password?");

    upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    specChar = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "~", "<", ">", "?"];


    var password = "";

    for (i = 0; i < i.length; i++) {
        var random = userChoice.charAt(Math.floor(Math.random() * Math.floor(i.length - 1)));

        password = random + password;


        console.log(password)

        var generate = document.getElementById("password");

        generate.select();

        document.execCommand("generate");
        console.log(generate);

        return password;
    }
    document.getElementById("generate");
}

var userChoice = "";

for (i = 0; i < userChoice.length; i++) {
    password = userChoice.charAt(Math.floor(Math.random() * Math.floor(i.length - 1)));
}

function userChoice() {
    if ([uppercase = true], [lowerCase = true], [numChar = true], [specChar = true]) {
        userChoice.values([""])
    } else if ([upperCase = true], [lowercase = true], [numChar = true], [specChar = false]) {
        userChoice = [""],[""],[""],[""]
    } else if ([upperCase = true], [lowerCase = true], [numChar = false], [specChar = false]) {
        userChoice = [""],[""],[""],[""]
    } else if ([upperCase = true], [lowerCase = false], [numChar = false], [specChar = false]) {
        userChoice = [""],[""],[""],[""]
    } else if ([uppercase = false], [lowerCase = false], [numChar = true], [specChar = false]) {
        userChoice = [""],[""],[""],[""]
    } else if ([upperCase = false], [lowerCase = false], [numChar = false], [specChar = true]) {
        userChoice
    } else if ([upperCase = false], [lowerCase = false], [numChar = true], [specChar = true]) {
        userChoice 
    } else if ([upperCase = false], [lowerCase = false], [numChar = false], [specChar = false]) {
        userChoice 
    }
    console.log(userChoice);

    return userChoice


}



document.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("password").innerHTML += "passphrase!";
}

console.log(generate);


// document.addEventListener("click", someOtherFunction () {
//     document.getElementById("copy");
//     alert("password copied to clipboard!:" + copy.value);
//     console.log(copy);
// });

// function copy() {
//     /* Get the text field */
//     var copy = document.getElementById("password");

//     copy.select();

//     /* Copy the text inside the text field */
//     document.execCommand("copy to clipboard");

//     /* Alert the copied text */
//     alert("password copied to clipboard!:" + copy.value);
// }