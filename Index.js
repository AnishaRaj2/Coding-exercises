function Printstr (a) {
    const str=a;
    console.log(str);
    return str;
}

function Bingo (a) {
    if (a>5){
        return((console.log("Bingo!")));
    } else {
        return((console.log("Try next time.")));
        }
}

Printstr ("Hello");
Printstr ("How are you?");
Bingo (2);
Bingo (5);
Bingo (7);