//You must understand JavaScript Callbacks to understand the basics of asynchronous JavaScript. Callbacks are functions that get passed as a parameter to another function. This is made possible by the fact that functions are first-class citizens in JavaScript and they are commonly used as a way to notify that some action has been completed.

setTimeout(() => {
    console.log("Hello")
}, 100)

console.log("1");
setTimeout(() => {
    console.log("2")
}, 0)

const names = ['james', 'jess', 'lily', 'sevy']

names.forEach((name) => console.log(name))

const myForEach(arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element - arr[i];
        cb(element)
    
    }
}

myForEach(names, (name) => {
    console.log(name);
})

//These are all synchronis. Now lets do asyncronis

const loadPokement = (id, cb) => {
    fetch('https://pokeapi.co/api/v2/pokemon/${id}')
    .then(res => res.json())
    .then(data => {
        cb(data)
    })
}

loadPokemon(56, (pokemon) => {
    console.log(pokemon);
})