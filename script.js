document.getElementById('button').onclick = function() {
	let passlength = document.getElementById('passlength').value;
	let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	let uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	let special = ['!', '\"', '£', '$', '%', '^', '\&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ':', '@', '~', ';', '\'', '#', '?', '*', '-']
	
	if (document.getElementById('passlength').value === '') {
		alert('Please enter a number to define password length.');
		return;
	}

	if (document.getElementById('numbers').checked) {
		chars = chars.concat(nums)
	}

	if (document.getElementById('uppercase').checked) {
		chars = chars.concat(uppers)
	}
	
	if (document.getElementById('special').checked) {
		chars = chars.concat(special)
	}

	function randomString(length, chars) {
	    var result = '';
		for (var i = length; i > 0; --i) {
			result += chars[Math.floor(Math.random() * chars.length)];
		}
	    return result;
	}

	var result = randomString(passlength, chars);
	document.getElementById("outputbox").innerHTML = '<div id="output">' + result + '</div>';
}