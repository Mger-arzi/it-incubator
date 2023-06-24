// тестовый текст 

/* текстовый текст по больше */

const myStr ="FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

let myStr2 = "Jello World";
myStr2 = "Hello World";
console.log(myStr2)

const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1];

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "Reks "+ myNoun + " same " + myAdjective +" 23e432 "+myVerb+ " ohgo "+ myAdverb ; 

const myArray = ['some', 1, 2, 4];

const myArray2 = [['mySome', 4,3,1], ["hyi", 1,3,4]];

const myData = myArray[0]

myArray[0]= 45

const myArray4 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
  ];
  
  const myData2 = myArray[2][1];

  const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop()

const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray2 = myArray.shift()

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

function reusableFunction(){
	console.log("Hi World")
  }
  reusableFunction()

  function functionWithArgs(a, b){
	console.log(a+b)
  }
  functionWithArgs(2,3)

  let myGlobal =10
function fun1() {
oopsGlobal = 5
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);

  function myLocalScope() {
  let myVar = 2
	console.log('inside myLocalScope', myVar);
  }
}
  myLocalScope()


  const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();

function nextInLine(arr, item) {
	arr.push(item)
	return arr.shift();
  }
  let testArray = [1,2,3,4,5]
  console.log(nextInLine(testArray ,6))


  function testEqual(val) {
  if (val ==12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");