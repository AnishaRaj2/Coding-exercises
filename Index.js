function Printstr (a) {
    console.log(a);
    return a;
}

function Bingo (a) {
    if (a>5){
        return((console.log("Bingo!")));
    } else {
        return((console.log("Try next time.")));
        }
}

//calling Print String function
Printstr ("Hello");
Printstr ("How are you?");

//calling Bingo function
Bingo (2);
Bingo (5);
Bingo (7);
Bingo(1);