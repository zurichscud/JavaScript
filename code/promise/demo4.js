async function f() {
    return 1
}
f().then((a) =>{console.log(a)})

function f1() {
    return Promise.resolve(1)
}