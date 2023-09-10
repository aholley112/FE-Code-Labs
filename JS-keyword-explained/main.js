//this is a keyword that is used to reference the object that is executing the current function.

//function test()
//{
//    console.log(this);
//}
//test();

//const user = {
//firstName: "Patrick",
//lastName: "Scott",
//fullName: function(){
//   console.log(this)
//console.log(this.firstName + " " +this.lastName)
//}
//}
//user.fullName();

//const user = {
//  firstName: "Patrick",
//lastName: "Scott",
//fullName: function() {

//  const arrowFunction = () => {
//    console.log(this)
//  console.log(this.firstName + " " +this.lastName)
// }
// arrowFunction();
//   }
// }
// user.fullName();

//const user = {
//  firstName: "Patrick",
//  lastName: "Scott",
//  hobbies: ["programming", "piano"],
 // listHobbies: function () {
 //   this.hobbies.forEach(function (hobby) {
 //     console.log(this.firstName)
 //     console.log(hobby)
//}, this);
 // }
//}
//user.listHobbies();

function User(name)
{
    this.name = name;
    console.log(this);
}

const devsage = new User("DevSage");
const codingphase = new User("CodingPhase");
