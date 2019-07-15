var message = []
message [0] = "walk away from the situation urgently!";
message [1] = "go talk to lily instead";
message [2] = "play a game with her!";
message [3] = "make a joke!";
message [4] = "be a friend";
message [5] = "ask her a question";
message [6] = "ask her what are we having for lunch today";


function randomTip(){
  var randomTip = Math.floor(Math.random()*(message.length));
  document.getElementById('tip').innerHTML = message[randomTip];
}
