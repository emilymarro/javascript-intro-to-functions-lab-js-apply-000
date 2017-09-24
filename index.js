var shout = string.toLowerCase;
var whisper = string.toUpperCase;

function sayHiToGrandma(string){
    if (string === shout()){
      return 'I can\'t hear you!';
    }
    if (string === whisper ){
      return 'YES INDEED!';
    }
    if (string === 'I love you, Grandma.'){
      return 'I love you, too.';
  }
