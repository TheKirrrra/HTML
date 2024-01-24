function whatColorIsSky(answer) {
    return new Promise((resolve,reject) => {
      if (answer === "blue") {
        setTimeout(() => {
            resolve(`Yes, "${answer}" is correct`)
                        
        }, 3000)
      } else {
        setTimeout(() => {
            reject(`No, "${answer}" is incorrect`)
        }, 2500)
      } 
    })
}

whatColorIsSky("blue").then(data => {
    console.log(data)
}).catch(data => {
    console.log(data)
})




// console.log(whatColorIsSky("red"))