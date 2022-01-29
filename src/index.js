module.exports = function toReadable(number) {
    arrX = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    arrY = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    arrZ = [
        "error",
        "error",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let lengthStrN = Number(number.toString().length);

    x = Number(number.toString().slice(-1));
    y = Number(number.toString().slice(-2, -1));
    z = Number(number.toString().slice(-3, -2));

    if (lengthStrN === 1) {
        return arrX[number];
    } else if (lengthStrN === 2 && y === 1) {
        return arrY[x];
    } else if (lengthStrN === 2 && y > 1 && x !== 0) {
        return arrZ[y] + " " + arrX[x];
    } else if (lengthStrN === 2 && y > 1 && x === 0) {
        return arrZ[y];
    } else if (lengthStrN === 3 && y === 1 && x !== 0) {
        return arrX[z] + " hundred " + arrY[x];
    } else if (lengthStrN === 3 && y === 1 && x === 0) {
        return arrX[z] + " hundred " + arrY[x];
    } else if (lengthStrN === 3 && y > 1 && x !== 0) {
        return arrX[z] + " hundred " + arrZ[y] + " " + arrX[x];
    } else if (lengthStrN === 3 && y > 1 && x === 0) {
        return arrX[z] + " hundred " + arrZ[y];
    } else if (lengthStrN === 3 && y === 0 && x !== 0) {
        return arrX[z] + " hundred " + arrX[x];
    } else if (lengthStrN === 3 && y === 0 && x === 0) {
        return arrX[z] + " hundred";
    }

    return "error";
};
