!function () {
    const promise=new Promise((resolve, reject)=>{
        resolve('初始数据')
    })
    promise.then(result => {
        console.log(result)
        return '第二个数据'
    })
        .then(result=>{
            console.log(result)
            return'第三个数据'
        })
        .then(result=>{
            console.log(result)
            return '第四个数据'
        })
        .then(result=>{
            console.log(result)
        })

}()
!function () {
    function sum(a,b) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(a+b)
            },1000)
        })
    }
    sum(1,2).then(result=> result+3)
        .then(result=>result+4)
        .then(result=>result+5)
        .then(result=>result+6)
        .then(result=>console.log(result))
}()
!function () {
  function f() {
      return new Promise((resolve, reject)=>{
          setTimeout(()=>{
              resolve('炖老母鸡')
          },1000)
      })
  }
  f().then(result=>{
      console.log(result)
      return '吃鸡'
  })
      .then(result=>{
          console.log(result)
          return '洗碗'
      })
      .then(result=>{
          console.log(result)
      })
}()
!function () {
    const promise=new Promise((resolve, reject)=>{
        resolve('first')
    })
    promise.then(res=>'second')
        .then(res=>'third')
        .catch(res=> console.log(res))
        .then(res=>console.log(res))
}()

