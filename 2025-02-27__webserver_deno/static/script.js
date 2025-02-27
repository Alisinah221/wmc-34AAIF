function isPrime(num) {
    if (num <= 1) {
            return false;
        }
    if (num <= 3) {
        return true;
    }

    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function checkPrime() {
    const num = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");
    var regex= /^[0-9]+$/;
    if(num.match(regex)){
    if (isPrime(num)) {
        resultElement.textContent = "Ja Es ist Primzahl!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Nein Keine Primzahl!";
        resultElement.style.color = "red";
    }
    } else{
        resultElement.textContent = "Üngultige Eingabe!";
        resultElement.style.color = "red";
    }
}