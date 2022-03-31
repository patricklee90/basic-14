let winingTime = 2;

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  let guessList = ["banana", "chisel", "faucet"];

  let correctAnswer = guessList[Math.floor(Math.random() * guessList.length)];

  if (input === correctAnswer) {
    winingTime = winingTime - 1;
    if (winingTime >= 1) {
      return `You guessed: ${input}. Secret word: ${correctAnswer}. You guessed correctly! You need ${winingTime} more correct guess to win.`;
    } else {
      winingTime = 2;
      return `You guessed: ${input}. Secret word: ${correctAnswer}. You guessed twice correctly. You win! Please play again.`;
    }
  } else {
    return `You guessed: ${input}. Secret word: ${correctAnswer}. You guessed incorrectly. You need ${winingTime} more correct guesses to win.`;
  }
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "helello xxw2orld";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "helloddd world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello4 world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello5 world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello6 world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello 7world";
  return myOutputValue;
};
