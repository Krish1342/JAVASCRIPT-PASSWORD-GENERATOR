function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSpecialCharacters) {
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChar = "0123456789";
    const specialChar = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";
    let allowedChars = "";
    let password = "";
    allowedChars +=includeLowerCase ? lowercaseChar : ""
    allowedChars += includeUpperCase? uppercaseChar : ""
    allowedChars += includeNumbers? numbersChar : ""
    allowedChars += includeSpecialCharacters? specialChar : ""

    if(length<=0){
        return "Password length should be greater than 0"; 
    }
    if(allowedChars.length === 0){
        return "At least one character type should be selected"; 
    }
    
    for(let i=0; i<length; i++){
       const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}




const passwrodLength = 10  ;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSpecialCharacters = true;

const password = generatePassword(passwrodLength, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters)

console.log(`Generated password: ${password}`);