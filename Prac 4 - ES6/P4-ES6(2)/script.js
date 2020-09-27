class PrimeChecker {

    isPrime = (num) => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    fillArray = (num) => {
        for (var i = 2, arr = []; arr.length != num; this.isPrime(i) && arr.push(i), i++);
        return arr;
    }
}

const checkPalindrome = (word) => {
    return word.split("").every(function(element, index) {
        return element === word[word.length - index - 1];
    });
}

var vowels = ["a", "e", "i", "o", "u"];

const checker = new PrimeChecker();
const nVowels = vowels.length;

function checkSameVowel(word) {
    let arrV = vowels.slice();
    console.log(arrV.length);
    //loop through the word
    let arr = word.split('');
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        while (counter < arrV.length) {
            if (arr[i] === arrV[counter]) {
                arrV.splice(counter, 1);
                console.log(arrV.length)
            }
            counter++;
        }
    }
    if (arrV.length < nVowels - 1) {
        return "The word " + word + " contains more than one vowel";
    } else {
        return "The word " + word + " only contains the same vowel";
    }

}

document.getElementById("checkPrimeBtn").onclick = () => {
    document.getElementById("primeResult").innerHTML = checker.isPrime(document.getElementById("primeChecker").value);
}

document.getElementById("getPrimeList").onclick = () => {
    document.getElementById("primeListResult").innerHTML = checker.fillArray(document.getElementById("primeList").value);
}

document.getElementById("checkPalindrome").onclick = () => {
    document.getElementById("palindromeResult").innerHTML = checkPalindrome(document.getElementById("palindromeChecker").value);
}

document.getElementById("checkVowel").onclick = () => {
    document.getElementById("vowelResult").innerHTML = checkSameVowel(document.getElementById("vowelChecker").value);
}