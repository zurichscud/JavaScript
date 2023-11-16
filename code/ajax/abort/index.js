const controller=new AbortController()
setTimeout(() =>{
    controller.abort()
},3000)
fetch('http://localhost:8080/students',{
    signal:controller.signal
})
    .then((res) => {
        if (res.status === 200)
            return res.json()
        else throw new Error('请求错误')
    })
    .then((r) => {
        console.log(r)
    })
    .catch((err) => {
        console.log(err)
    })