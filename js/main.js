var guess = document.querySelector('.guess').value;

var randomNumber = num(100);

function num(upper) {

	var randomNumber = Math.floor(Math.random() * upper) + 1;
 console.log(randomNumber);
	if (guess == randomNumber) {
	// document.querySelector('.guessResponse').innerHTML = 'you got the right number';
	console.log('yay');
}
	return randomNumber; 
}  

   

	// // if (guess == randomNumber) {
	// // document.querySelector('.guessResponse').innerHTML = 'you got the right number';	
	// // // } else {
	// // // 	document.querySelector('.guessResponse').textContent = 'Not the right Number. The correct number is ' + randomNumber;
	// }
