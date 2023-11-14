setTimeout(() => {
    console.log(1)
},0)
Promise.resolve(1).then(() =>{console.log(2)})
console.log(3)
queueMicrotask(() =>{console.log(4)})

function A() {
    console.log(1)
}
function B() {
    console.log(2)
}
function timer() {
    setTimeout(A)
}

Promise.resolve().then(timer)
queueMicrotask(B)
