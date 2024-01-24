console.log("console.log 1");

Promise.resolve("Promise 1").then(data => console.log(data))

setTimeout(() => {
    console.log("Set timeout")
}, 0)

console.log("console.log 2")