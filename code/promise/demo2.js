!function (){
    function sum(a,b) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(a+b)
            },1000)
        })
    }
    Promise.any([
        Promise.reject(1111),
        // Promise.resolve(2222),
        sum(1,2),
    ])  .then(result=>console.log(result))
        .catch(result=>console.log(result))


}()
!function () {
    function fun2(){

    }
    function fun3() {

    }
    getSum(10,20,(res1)=>{
        fun2(res1,(res2)=>{
            fun3(res2,(res3)=>{
                console.log(res3)
            })
        })
    })
}()