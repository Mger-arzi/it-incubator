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