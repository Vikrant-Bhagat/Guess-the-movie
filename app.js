const favMovie = "avatar";
let guess = prompt("Guess the movie name");
while(guess!=favMovie && guess!='quit'){
    guess = prompt("Wrong guess.Plz try again");
}
if(guess=='avatar'){
    console.log("correct guess");
}
else{
    console.log("U quit");
}