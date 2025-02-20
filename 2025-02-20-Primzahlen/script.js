function isPrime(num) {
    if (num <= 1) {
            return false;
        }
    if (num <= 3) {
        return true;
    }

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function checkPrime() {
    const num = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");
    if(Number.isInteger(num)){
    if (isPrime(parseInt(num))) {
        resultElement.textContent = "Ja!";
    } else {
        resultElement.textContent = "Nein!";
    }} else{
        resultElement.textContent = "Keine Zahl!";
    }
}