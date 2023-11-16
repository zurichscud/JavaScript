const jwt=require('jsonwebtoken')
const obj={
    name:'lai',
    age:12,
}
const privateKey='123150'
const token=jwt.sign(obj,privateKey,{expiresIn: '1'})
console.log(token)

//解密
try {
    const res = jwt.verify(token, privateKey)
    console.log(res)
} catch (e) {
    console.log('Token已过期')
}