// console.log("hello")

// setTimeout(()=>{
//     console.log("hello in 5 sec")
// }, 5000)


setTimeout(() => {
    console.log('hello from timeout')
}, 0)

console.log('hello from console.log!')

const interval = setInterval(()=> {
    console.log('Tick!');
}, 990)

setTimeout(()=> {
    console.log('clearInterval!');
    clearInterval(interval)
}, 5000)