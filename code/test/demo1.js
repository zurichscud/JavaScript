// function f1() {
//     setTimeout(function(){
//         console.log(111)
//     },1000)
    
// }
// function f2(){
//     console.log(222)
// }
// f1()
// f2()
function f2(){
    console.log(222)
}
function f1() {
    setTimeout(function(){
        console.log(111)
        f2()
    },2000)
}
f1()
function User() {
    let _age=0//私有化变量，不允许外部直接调用
    this.getAge=function () {
        return _age
    }
    this.setAge=function (age) {
        if(age>0) _age=age
    }
}
const user=new User()
user.setAge(12)
console.log(user.getAge());
