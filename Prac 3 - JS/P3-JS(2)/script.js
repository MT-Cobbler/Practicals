function PrimeChecker(){
		this.isPrime = function(num){
		
		if(num === 1){
			return false;
		}
		else if(num ===2){
			return true;
		}
		else{
			for(var i = 2; i < num ; i++){
				if((num % i) === 0){
					return false;
				}
			}
			return true;
		}
		
	};
	this.fillArray = function(limit){
		var numbers = [];//initialize the array
		// limit is the size of the array
		// we need to fill the array 
		var n = 1;
		var counter = 0;
		console.log(limit);
		while(counter < limit){

			if(this.isPrime(n)){
				numbers.push(n);
				counter++;
			}
			n++;
		}
		return numbers;
	};
}

document.getElementById("checkPrimeBtn").addEventListener("click", function(){

	var prime = new PrimeChecker(); // 
	var check_Prime = prime.isPrime(document.getElementById("primeChecker").value);

	document.getElementById("primeResult").innerHTML = check_Prime;
});
//print out the prime numbers to a value
document.getElementById("getPrimeList").addEventListener("click", function(){

	var max = document.getElementById("primeList").value;

	var prime = new PrimeChecker(); //
	var printList = prime.fillArray(max);

	for (var i = 0 ; i < printList.length ; i++) {
		console.log(printList[i]);console.log("printing value");
	}
	var arrayContents = printList.join();

	document.getElementById("primeListResult").innerHTML = arrayContents;

});

//---------------------------------------------------------------//
// Section 2
var checkPalindrome = function(word){
	
	var arr1 = word.split('');
	console.log(arr1);

	// store the contents of array 1
	var arr1Content = arr1.join();

	var arr2 = [];
	var counter = 0;

	for (var i = arr1.length-1 ; i >=0 ; i--){
		arr2[counter] = arr1[i];
		counter++;
	}
	// store in a variable 
	var arr2Content = arr2.join();
	console.log(arr2Content);
	var is;
	if(arr1Content === arr2Content){
		 is = true;
	}
	else{
		 is = false;
	}
	document.getElementById("palindromeResult").innerHTML = is;
	return is;
}

// document.getElementById("checkPalindrome").addEventListener("click", checkPalindrome(document.getElementById("palindromeChecker").value));

document.getElementById("checkPalindrome").addEventListener("click",function(){
	document.getElementById("palindromeChecker").innerHTML = checkPalindrome(document.getElementById("palindromeChecker").value);
});