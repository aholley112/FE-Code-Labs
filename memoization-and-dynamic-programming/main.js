//Memoization is a big complicated word that you may have never even heard before, but you may be surprised to know that you are most likely already using memoization without even realizing it. Memoization is just the act of caching values so that they can be calculated quicker in the future. Memoization is really useful in all parts of programming, but where it is most useful is in dynamic programming. In this video I will explain what memoization is, how to use it, and why it is so useful especially in dynamic programming.

const prevValues = []

function square(n) {
    if (prevValues[n] != null) {
        return prevValues[n]
    }
    let result = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1
        }
    }
    return result
}
prevValues[n] = result
console.log(square(3000))

//Fetching external resources like fetching API or when you want to make it faster.

function fib(n, prevValues = []) {
    if (prevValues[n] != null) {
        return prevValues[n]
    }
     let result
     if (n <= 2) {
        result = 1
     } else {
        result fib(n - 1, prevValues) + fib(n - 2, prevValues)
    }
    prevValues[n] = result
    return result
}

console.log(fib(41))