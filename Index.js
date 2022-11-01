
const printString = function (text) {
    return text;
}

const checkBingo = function (number) {
    if (number>5){
        return "Bingo!";
    } else {
        return "Try next time.";
        }
};

//calling Print String function
console.log(printString ("Hello"));
console.log(printString ("How are you?"));

//calling checkBingo function
console.log(checkBingo(2));
console.log(checkBingo(5));
console.log(checkBingo(7));
