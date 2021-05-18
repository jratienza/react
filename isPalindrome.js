function removeWhiteSpaces(str) {
    let splitOnSpaces = str.split(" ");
    return splitOnSpaces.join("");
}

function preProcessString(str) {
    let lowerCaseString = str.toLowerCase();
    let noSpaceString = removeWhiteSpaces(lowerCaseString);
    return noSpaceString;
}

function reverseString(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    return reverseString.join("");
}

function checkIfSame(str, strReversed) {
    if (str === strReversed) return true;
    return false;
}

function isPalindrome(str) {
    let strPreProcessed = preProcessString(str);
    let strReversed = reverseString(strPreProcessed);

    let isTheSame = checkIfSame(strPreProcessed, strReversed);
    return isTheSame;
}

console.log(isPalindrome("a Santa dog lived as a devil god at NASA"));
console.log(isPalindrome("heya"));
console.log(isPalindrome(""));
