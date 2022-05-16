const regexa = /.abc/;
const regexb = /a+b?!!1{4}/;
const regexc = /.{3}a\.b/;
const regexd = /\w/;
const regexe = /\s/;
const regexf = /\d/;
const regexg = /./;
const regexh = /[abc]/;
const regexi = /(abc)/;
const regexj = /[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/;
const regexk = /\([0oOn]{1}(_|\s)[0oOn]{1}\)/;

console.log(regexa.test("mabc"));
console.log(regexb.test("aaaab!!1111"));
console.log(regexc.test("mnoa.b"));
console.log(regexd.test("_abcde_"));
console.log(regexe.test(" "));
console.log(regexf.test("58670"));
console.log(regexg.test("hello"));
console.log(regexh.test("angel"));
console.log(regexi.test("abcedary"));
console.log(regexj.test("cepadilla@intekglobal.com"));
console.log(regexk.test("(0_n)"));

