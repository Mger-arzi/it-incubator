function findAverage(array) {
	let average = 0 
	let sum = 0
	for ( let i; i = array.length; i++){
		sum += array[i]
	}
	average = sum / array.length
	if(array === []){
		return 0
	}
	else return average

}


function getChar(c){
	let code = String.fromCharCode(c);
console.log(code);
	
}
getChar(8)
const code = 97;

const character = String.fromCharCode(code);

console.log(character);

function findShort(s){
	let arr = s.split(" ").sort((a, b) => a.length - b.length);
	return arr[0].length
  }

  function isTriangle(a, b, c) {
	if ((a + b > c) && (a + c > b) && (b + c > a)) {
	return true;
	}
	else {
	if ((a <= 0) || (b <= 0) || (c <= 0)) {
	return false;
	}
	else {
	return false;
	}
	}
	}