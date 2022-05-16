function cyclicalABC(str) {

    let result = "";
    let charcode = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i]=="z") {
        result += "a";
      } else {
        if (str[i]=="Z") {
          result += "A";
        } else {
          if (str[i]=="9") {
            result += "0";
          } else {
            charcode = str[i].charCodeAt();
            result += String.fromCharCode(charcode + 1);
          }
        }
      }
    }
    return result;
}

console.log(cyclicalABC("aBc"));
console.log(cyclicalABC("xyz"));
console.log(cyclicalABC("aK89"));
