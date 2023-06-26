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

  const myArray5 = [["John", 23], ["cat", 2]];
myArray5.push(["dog", 3])

const myArray9= [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray9.pop()

const myArray21 = [["John", 23], ["dog", 3]];
const removedFromMyArray2 = myArray21.shift()

const myArray11 = [["John", 23], ["dog", 3]];
myArray11.shift();
myArray11.unshift(["Paul", 35])

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

  
}

function myLocalScope() {
	let myVar = 2
	  console.log('inside myLocalScope', myVar);
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

function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

function testGreaterThan(val) {
  if (val> 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);


function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);


function testLogicalAnd(val) {
	if (val <= 50 && val >= 25) {
	
		return "Yes";
	  }
	return "No";
	}
  testLogicalAnd(10);


  function testLogicalOr(val) {
	if (val < 10 || val > 20) {
	  return "Outside";
	}
  
	return "Inside";
  }
testLogicalOr(15);

function testElse(val) {
	let result = "";
  
	if (val > 5) {
	  result = "Bigger than 5";
	}
  
	else  {
	  result = "5 or Smaller";
	}
	return result;
  }
  
  testElse(4);

  function testElseIf(val) {
	if (val > 10) {
	  return "Greater than 10";
	}
  
	else if (val < 5) {
	  return "Smaller than 5";
	}
	else {
	return "Between 5 and 10";
  
	}
  }
  testElseIf(7);


  function orderMyLogic(val) {
	if (val < 5) {
	  return "Less than 5";
	} else if (val < 10) {
	  return "Less than 10";
	} else {
	  return "Greater than or equal to 10";
	}
  }
  console.log(orderMyLogic(7));

  function checkScope() {
	let i = 'function scope';
  
	if (true) {
	 let i = 'block scope';
	  console.log('Block scope i is: ', i);
	}
  
	console.log('Function scope i is: ', i);
	return i
  }

  function testSize(num) {
  if(num < 5){
	return"Tiny"
  }
  else if (num < 10){
   return "Small"
  }
  else if (num < 15){
   return "Medium"
  }
  else if (num < 20){
   return "Large"
  }
  else {
	return"Huge"
  }
  }
  
  testSize(7);

  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1 ){
  return names[0]
}else if (strokes  <= par - 2){
  return names[1]
}else if (strokes == par -1){
  return names[2]
}else if (strokes == par){
  return names[3] 
}else if (strokes == par +1){
  return names[4]
}else if (strokes == par + 2){
  return names[5]
}else (strokes >= par + 3)
  return names[6]

}

golfScore(5, 4);

function caseInSwitch(val) {
  let answer = "";
  switch(val){
    case 1 :
    answer = "alpha"
    break

    case 2 :
    answer = "beta"
    break

    case 3 :
    answer = "gamma"
    break

    case 4 :
    answer = "delta"
    break
  }
}

function switchOfStuff(val) {
  let answer = "";
  switch(val){
    case "a" :
    answer = "apple"
    break;

    case 'b' :
    answer = "bird"
    break;

    case 'c' :
    answer = "cat"
    break;

    default:
    answer = "stuff"
    break;
  }


  return answer;
}