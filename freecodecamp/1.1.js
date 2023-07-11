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

function sequentialSizes(val) {
  let answer = "";
  switch (val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High"
      break;
    
  }
  return answer;
}

sequentialSizes(1);


function chainToSwitch(val) {
  let answer = "";

  switch(val){
    case "bob":
    answer = "Marley"
    break;

    case 42:
    answer = 'The Answer'
    break;

    case 1:
    answer = 'There is no #1'
    break;

    case 99:
    answer = "Missed me by this much!"
    break

    case 7:
    answer = 'Ate Nine'

  }

  return answer;
}

chainToSwitch(7);


function isLess(a, b) {
    return a < b
 
}

isLess(10, 15);

function abTest(a, b) {
if (a < 0 || b < 0){
  return undefined
}
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);


let count = 0;

function cc(card) {
switch(card){
  case  2:
      case  3:
      case  4:
      case  5:
       case 6:
  count++ 
  break
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count-- 
  break
}
if(count > 0){
  return count + " Bet"
}
else{
  return count + " Hold"
}
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

const myDog = {
  name: 'Nat',
  legs: 2,
  tails: 2,
  friends: ['Ira', 'Yla']
};

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;      
const shirtValue = testObj.shirt;   

const testObj2= {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16; 
const player = testObj2[playerNumber]; 

const myDog2 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog2.name = "Happy Coder"

const myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails


function phoneticLookup(val) {
  let result = "";
 let lookup = {
  "alpha": 'Adams',
  "bravo": 'Boston',
  'charlie': 'Chicago',
  'delta': 'Denver',
  'echo': 'Easy',
  'foxtrot': 'Frank',
}
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": 'nklj',
    "title": 'hff',
    "release_year": 1998,
    "formats": [
      'cs',
      'sd',
      're'
    ]
  }
];

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

const myPlants = [
	{
	  type: "flowers",
	  list: [
		"rose",
		"tulip",
		"dandelion"
	  ]
	},
	{
	  type: "trees",
	  list: [
		"fir",
		"pine",
		"birch"
	  ]
	}
  ];
  
  const secondTree = myPlants[1].list[1];

const recordCollection = {
	2548: {
	  albumTitle: 'Slippery When Wet',
	  artist: 'Bon Jovi',
	  tracks: ['Let It Rock', 'You Give Love a Bad Name']
	},
	2468: {
	  albumTitle: '1999',
	  artist: 'Prince',
	  tracks: ['1999', 'Little Red Corvette']
	},
	1245: {
	  artist: 'Robert Palmer',
	  tracks: []
	},
	5439: {
	  albumTitle: 'ABBA Gold'
	}
  };
  function updateRecords(records, id, prop, value) {
	if ( value === ''){
	  delete records[id][prop]
	}
	else if ( prop !=='tracks' && value !== ''){
	  records[id][prop] = value
	}
	else if (prop === 'tracks' && value !== ''){
	  if(records[id].hasOwnProperty("tracks") === false){
		records[id][prop] = []
	  }
	  records[id][prop].push(value)
	}
	return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');

  const myArray = [];
let i = 5 
while (i >= 0 ){
  myArray.push(i);
  i--
}
const myArray = [];
for (let i = 1; i <= 5; i++)
myArray.push(i)

const myArray = [];
for ( let i = 9; i > 0; i -= 2){
  myArray.push(i)
}
function multiplyAll(arr) {
	let product = 1;
  for (let i = 0; i < arr.length; i++){
	for (let j = 0; j < arr[i].length; j++){
	  product *= arr[i][j]
	}
  }
	return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  function sum(arr, n) {
 if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
  function lookUpProfile(name, prop) {
	for(let i = 0; i < contacts.length; i++){
		if ( name === contacts[i].firstName) {
  
		  if(contacts[i].hasOwnProperty(prop)){
			return contacts[i][prop]
	}else{
	  return "No such property";
	   }
	  }
	 }
	return "No such contact"
  }
  lookUpProfile("Akira", "likes");

  function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }


  
  
console.log("sdfsd")

function convertToInteger(str) {
	return parseInt(str, 2)
  }
  
  convertToInteger("10011");



  function checkEqual(a, b) {
	return a === b ? 'Equal' : 'Not Equal'}
  
  checkEqual(1, 2);
  function checkSign(num) {
	return (num > 0) ? 'positive'
	  : (num < 0) ? 'negative'
	  : 'zero'
  }
  
  checkSign(10);

  function countdown(n){
	if(n < 1){
	return []
	} else {let Arr = countdown(n - 1)
	Arr.unshift(n)
	return Arr
	}
  }

  function rangeOfNumbers(startNum, endNum) {
	return  startNum > endNum 
	? []
	: rangeOfNumbers(startNum ,endNum - 1).concat(endNum)  
   };
   function freezeObj() {
	const MATH_CONSTANTS = {
	  PI: 3.14
	};
  Object.freeze(MATH_CONSTANTS)
	try {
	  MATH_CONSTANTS.PI = 99;
	} catch(ex) {
	  console.log(ex);
	}
	return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  const myConcat =(arr1, arr2) =>  
  arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

const sum = (...args) => {
	let total = 0;
	for (let i = 0; i < args.length; i++) {
	  total += args[i];
	}
	return total;
  }

  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  
console.log(arr2)

const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
  };
  const {tomorrow, today} = HIGH_TEMPERATURES

  const HIGH_TEMPERATURES2 = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
  };
	
  const {today: highToday_2, tomorrow: highTomorrow}  = HIGH_TEMPERATURES2


  const LOCAL_FORECAST = {
	yesterday: { low: 61, high: 75 },
	today: { low: 64, high: 77 },
	tomorrow: { low: 68, high: 80 }
  };
	
  const  { today: {low:  lowToday } } = LOCAL_FORECAST;
  const  { today: {high: highToday} }= LOCAL_FORECAST;
  