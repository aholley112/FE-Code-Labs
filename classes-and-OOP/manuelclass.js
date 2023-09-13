// class Player{
//     age = 20;
//     constructor(name, hp, mp, items) {
//         this.name = name;
//         this.hp = hp;
//         this.mp = mp;
//         this.items = items;
//     // this.age = 20;
//     }

//     speak(phrase){
//         console.log(`${this.name} says:${phrase}`)
//     }
// }

// const hanSolo = new Player("Han Solo", 100, 10, ["blaster"]);
// hanSolo.speak("Never tell me the odds!");
// console.log(hanSolo);
// console.log(Object.getOwnPropertyNames(hanSolo));
// console.log(Object.getOwnPropertyNames(hanSolo_proto_));

// const nader = new Player("Nader", 10, 5, ["Computer"]);
// nader.speak("Monkeys are the best animal!");
// console.log(nader);
// console.log(Object.getOwnPropertyNames(nader));
// console.log(Object.getOwnPropertyNames(nader_proto_));

// function AnotherPlayer(name, hp, mp, items){
//     this.name = name;
//     this.hp = hp;
//     this.mp = mp;
//     this.items = items;
//     this.speak = function (phrase) {
//         console.log(`${this.name} says:${phrase}`)
//     };
// }

// AnotherPlayer.prototype.speak = function (phrase) {
//     console.log(`${this.name} says:${phrase}`)
// };

// const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"]);
// console.log(darthVader);
// darthVader.speak("Hshfsfiihhhhh");
// console.log(Object.getOwnPropertyNames(darthVader));
// console.log(Object.getOwnPropertyNames(darthVader_proto_));


