//Spreads out the items in the array as individual arguments.

const parents = ["Lorie", "Steve"];
const kids = ['Jake', "Annie", "Jess"];
const dogs = ['Olie', 'Cosmo'];

[...parents,...kids, "ME!"...dogs, "Unnamed Pet Turtle"]
(9) ["Lorie", "Steve", "Jake", "Annie", "Jess", "ME!", "Ollie", "Cosmo", "Unnamed pet Turtle"]

const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];

const copies = originals;

//More examples are in the notes from the video I printed. Refer to notes. 

const lion = {hasTail: true, legs: 4};
const eagle = {canFly: true};

const hybrid = {name: "Gryphon",...lion, ...eagle}

//Todo example from notes.

const todos = [
    {user: "Brick", completed:false, task: "Upload Video"},
    {user: "Lilith", completed: true, task: "Rob Bank"}
]
function addTodo(newTodo) {
    return [{...newTodo, completed: false}, ...todos]
}

AddTodo({user: "Mordecai", task: "Walk Dog"})