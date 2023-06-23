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

const myArray = [
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