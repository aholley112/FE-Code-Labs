//Global executation context
console.log("message")
logger()

console.log(1)

function logger() {
console.log(2)
finish()
console.log(3)
function finish() {
    console.log("finished")
}
}

//Function exec context

function first () {
    console.log(1)
}

function second(callback) {
    setTimeout(() => {
        console.log(2)
    }, 0))
}

function third() {
    console.log(3)
}

first()
second(third)


//A call back is a function that's a paramater
//this is a higher order function that takes in another function in as a paramater.

function message () {
    console.log("Hello there")
}
function logger(message) {
    console.log(message)
}

logger(message)

//Callback Hell

function callbackHell() {
    setTimeout(() => {
        const data = { user: "Johnny"}
        console.log(data)
        setTimeout(() => {
            console.log("Data has been Updated")
        }, 1000)
    }, 500)
}

callbackHell()

//Promises

const promise = new Promise((resolve, reject) => {
    resolve({ user: "Blanka:" })
})

promise
.then((data) => {
    const user = data
    return fetch("https://jsonpaceholder.typicode.com/todos/1")
})
.then((todos) => {
    console.log(todos)
})
.catch ((err) => {
    console.log(err)
})

const promise = new Promise ((resolve,reject) => {
    setTimeout(() => resolve("this is my data from a server"), 2000)
})

promise.then((res) => {
    console.log(res)
})

fetch("https://jsonplavceholder.typicode.com/todos/1").then((data) => {
    .then((data) => { 
    return data.json()
})
.then((jsonedData) => {
    console.log(jsonedData)
})
.catch((err) => {
    console.log("oh no something wrong")
})
.finally(() => {
    console.log("well everything is done, we tried")
})

//Async Await

async function getTodos() {
    try{

    const response = await fetch("https.//jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
    console.log(data)
    console.log(2)
    } catch (err) {
        console.log("SOMETHING WENT WRONG...")
    }
}

getTodos()

//TRY IT

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

//Expected output: Array [3, 42, "foo"]