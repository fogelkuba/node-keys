module.exports = {
     init: function (uncoded) {
        const toCode = this.toASCII(uncoded);
        const prime = this.findPrimeNumbers(10580, 35600);

        const P = prime[0];
        const Q = prime[1];
        const FI = this.getFi(P, Q);
        const N = P * Q;
        let E;

        for (let i = 3; i < FI; i++) {
            if (this.getGCD(i, FI) === 1) {
                E = i;
                break;
            }
        }

        res = {
            n: N,
            e: E,
            code: this.doCode(toCode, E, N)
        }

        console.log(res);
        return res
    },

    doCode: function (code, e, n) {
        return Math.pow(code, e) % n;
    },

    findPrimeNumbers: function (x, y) {
        const res = [];

        for (let i = x; i <= y; i++) {

            if (i === 1) {
                continue;
            }

            if (i === 2) {
                res.push(i);
                continue;
            }

            if (i % 2 === 0 || !this.isPrimeNumber(i)) {
                continue
            }

            res.push(i);
        }

        return res;
    },

    isPrimeNumber: function (num) {
        let max = Math.floor(num / 2);

        for (let i = 2; i < max; i++) {

            if (num % i === 0) {
                return false;
            }
        }
        return true;
    },

    toASCII: function (string) {
        let int = 0;

        for (let i = 0; i < string.length; i++) {
            int = int + string.charCodeAt(i);
        }
        return int;
    },

    getGCD: function (a, b) {

        while (a != b) {
            if (a < b) {
                b = b - a;
            } else {
                a = a - b;
            }
        }

        return a;
    },

    getFi: function (p, q) {
        return (q - 1) * (p - 1)
    }
}