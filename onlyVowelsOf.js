function getOnlyVowelsOf(str) {
    const vowels = ["a", "e", "i", "o", "u"];

    let strSplit = str.split("");
    let vowelsOnly = strSplit.filter((character) => vowels.includes(character));
    return vowelsOnly.join("");
}

console.log(getOnlyVowelsOf(""));
console.log(getOnlyVowelsOf("you know what's cooking"));
