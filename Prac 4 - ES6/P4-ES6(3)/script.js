function PrimeChecker(){
	this.isPrime = function(num){
  		for(var i = 2; i < num; i++)
    		if(num % i === 0) return false;
  		return num > 1;
	}

	this.fillArray = function(num){
		for(var i = 2, arr = []; arr.length != num; this.isPrime(i) && arr.push(i), i++);
		return arr;
	}
}

var checkPalindrome = function(word){
	return word.split("").every(function(element, index){
		return element === word[word.length - index - 1];
	});
}

var vowels = ["a", "e", "i", "o", "u"];

var checker = new PrimeChecker();

document.getElementById("checkPrimeBtn").onclick = function(){
	document.getElementById("primeResult").innerHTML = checker.isPrime(document.getElementById("primeChecker").value);
}

document.getElementById("getPrimeList").onclick = function(){
	document.getElementById("primeListResult").innerHTML = checker.fillArray(document.getElementById("primeList").value);
}

document.getElementById("checkPalindrome").onclick = function(){
	document.getElementById("palindromeResult").innerHTML = checkPalindrome(document.getElementById("palindromeChecker").value);
}