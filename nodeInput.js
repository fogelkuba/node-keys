const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your name?`, (toCode) => {
    init(toCode)
    readline.close()
})

function init(uncoded) {
    const toCode = toASCII(uncoded);
    const prime = findPrimeNumbers(10580, 35600);

    const P = prime[0];
    const Q = prime[1];
    const FI = getFi(P, Q);
    const N = P * Q;
    let E;

    for (let i = 3; i < FI; i++) {
        if (getGCD(i, FI) === 1) {
            E = i;
            break;
        }
    }

    res = {
        n: N,
        e: E,
        code: doCode(toCode, E, N)
    }

    console.log(res);
    
    // return res
}

function doCode(code, e, n) {
    return Math.pow(code, e) % n;
}

function findPrimeNumbers(x, y) {

    const res = [];

    for (let i = x; i <= y; i++) {

        if (i === 1) {
            continue;
        }

        if (i === 2) {
            res.push(i);
            continue;
        }

        if (i % 2 === 0 || !isPrimeNumber(i)) {
            continue
        }

        res.push(i);
    }

    return res;
}

function isPrimeNumber(num) {
    let max = Math.floor(num / 2);

    for (let i = 2; i < max; i++) {

        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function toASCII(string) {
    let int = 0;

    for (let i = 0; i < string.length; i++) {
        int = int + string.charCodeAt(i);
    }
    return int;
}

function getGCD(a, b) {

    while (a != b) {
        if (a < b) {
            b = b - a;
        } else {
            a = a - b;
        }
    }

    return a;
}

function getFi(p, q) {
    return (q - 1) * (p - 1)
}
