function shout(string) {
  return string.toUpperCase;
}

function whisper(string) {
  return string.toLowerCase;
}

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
