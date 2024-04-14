const calcItem = document.getElementById('items');
const input = document.getElementById('input');
let firstOperand = '';
let secondOperand = '';	
let operation = '';


function calcResults (firstOperand, secondOperand, operation) {
	first = parseFloat(firstOperand);
	second = parseFloat(secondOperand);
	switch (operation) {
		case '+':
			return first + second;
		case '-':
			return first - second;
		case '/':
			return first / second;
		case '*':
			return first * second;
		default: 
			return '';
	}
}

calcItem.addEventListener('click', function (event) {
	let btn = event.target.innerText;

	if ( btn === "" ) return;
	else {
		switch (btn) {
			case '0':
				input.value += '0';
				break;
			case '1':
				input.value += '1';
				break;
			case '2':
				input.value += '2';
				break;
			case '3':
				input.value += '3';
				break;
			case '4':
				input.value += '4';
				break;
			case '5':
				input.value += '5';
				break;
			case '6':
				input.value += '6';
				break;
			case '7':
				input.value += '7';
				break;
			case '8':
				input.value += '8';
				break;
			case '9':
				input.value += '9';
				break;
			case '.':
				input.value += '.';
				break;
			case 'C': 
				firstOperand = '', secondOperand = '', operation = '';
				input.value = '';
				break;
			case '-':
				if (firstOperand === '') {
					firstOperand = input.value;
				}	
				operation = '-';
				input.value = '';
				console.log(`${firstOperand}`);
				console.log(`${operation}`);
				break;
			case '+':
				if (firstOperand == '') {
					firstOperand = input.value;
				}	
				operation = '+';
				input.value = '';
				console.log(`${firstOperand}`);
				console.log(`${operation}`);
				break;
			case '*':
				if (firstOperand === '') {
					firstOperand = input.value;
				}	
				operation = '*';
				input.value = '';
				console.log(`${firstOperand}`);
				console.log(`${operation}`);
				break;
			case '/':
				if (firstOperand === '') {
					firstOperand = input.value;
				}	
				operation = '/';
				input.value = '';
				console.log(`${firstOperand}`);
				console.log(`${operation}`);
				break;
			case '=':
				secondOperand = input.value;
				input.value = calcResults(firstOperand, secondOperand, operation);
				firstOperand = '', secondOperand = '', operation = '';
				break;
		}
	}
});
