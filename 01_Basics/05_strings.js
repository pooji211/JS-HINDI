const name = "pooja"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('pooja-kanani')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11,5)
console.log(anotherString);

const newStringOne = "  pooja  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))


console.log(url.includes('hitesh'))

console.log(gameName.split('-'));