console.info("start");
var age = 18;
var myName = "Ion";

function learning() {
  return "I'm learning...";
}

function playGame(game) {
  return `I'm playing ${game}. My name is, ${this.name}`;
}

var person = {
  age: 27,
  name: "Raul",
  skills: ["html", "css", `js`],
  learn: function () {
    console.info("I'm learning JS, I love it!");
  },
  play: function (game) {
    return `I'm playing ${game}. My name is, ${this.name}`;
  },
};

console.log(person.name);
var l = person.learn;
console.warn(l);
var p = person.play("chess");
console.warn(p);

person.learn();
person.play();
