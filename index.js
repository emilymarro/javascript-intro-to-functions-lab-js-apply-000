
function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}
describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

function longWhisper(string){
  console.log (string.toUpperCase)
}
describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

sayHiToGrandma(string) {
  if (string="I love you, Grandma.") {
    console.log("I love you, too.");
  }
  //else if (string.toLowerCase() === lowercase) {
  else if (string="hello") {
    console.log("I can/'t hear you!");
  }
  else if (string="HELLO") {
  //else if (string.toUpperCase() === uppercase) {
    console.log("YES INDEED!");
  }
}
