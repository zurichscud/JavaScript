

// async function f2() {
//     console.log(1)
//     await console.log(2)
//     console.log(3)
// }
// f2()
// console.log(4)
console.log('############################')
!function () {
    function f2() {

        return new Promise(resolve => {
            console.log(1)
            console.log(2)
            resolve()
        }).then((r) =>{
            console.log(3)})
    }
    f2()
    console.log(4)

}()