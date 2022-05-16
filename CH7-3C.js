const testString = "01234543210";
function palindromeRegex(entryString) {
    const REGEX = /[\W_]/g;
    const cleanString = entryString.toLowerCase().replace(REGEX,"");
    const reverseString = cleanString.split("").reverse().join("");
    return cleanString === reverseString;
}
console.log(testString);
console.log(palindromeRegex(testString));
