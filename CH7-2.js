const regexa = /[A-Z]{1}[a-z]+[a-z]*\s\d{2},\s\d{4}/;
const regexb = /[a-zA-z]{1}\d+|\d+[a-zA-Z]{1}/;
const regexc = /[a-zA-Z]+[a-z-A-Z]*\.[a-z]{3,4}/;
const regexd = /(.?)(.?)(.?)(.?)(.?).?\5\4\3\2\1/;
const regexe = /\b[b-yB-Y]+\b/g;
const regexf = /(<[a-z]+>)([\w|\s|\<|/|\-]+)(<\/[a-z]+>)/ig;

console.log(regexa.test("September 29, 1972"));
console.log(regexa.test("February 99, 0001"));
console.log(regexa.test("June 04, 3000"));

console.log(regexb.test("A52"));
console.log(regexb.test("d747"));
console.log(regexb.test("27X"));
console.log(regexb.test("v2"));

console.log(regexc.test("test.java"));
console.log(regexc.test("program.cpp"));
console.log(regexc.test("newReport.txt"));

console.log(regexd.test("abcba"));
console.log(regexd.test("12321"));
console.log(regexd.test("_1a1_"));

let testString = "Bee zapp Crow Eagle Zorro  mouse Ape  you";
let matched = testString.match(regexe);
console.log(matched);

testString = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.";
matched = testString.match(regexf);
console.log(matched);