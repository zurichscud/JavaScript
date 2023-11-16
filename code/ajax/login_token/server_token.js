const express = require('express');
const jwt = require('jsonwebtoken');
const app = express()
app.listen(8080, () => {
    console.log('server running at localhost:8080 ......');
})
const bodyParser = require('body-parser');
// 使用 body-parser 中间件来解析 JSON 和 URL-encoded 请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let student = [
    {id: '1', name: '黎锐', age: 12},
    {id: '2', name: '王顺五', age: 20},
    {id: '3', name: '陈佳宁', age: 30},]
//解决跨域
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342')
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    next()
})

app.get('/student',(req, res) =>{
    console.log('GET...')
    try {
        const token=req.get('Authorization').split(' ')[1]//没有token会报错
        const result = jwt.verify(token, 'key');
        console.log(result)
        res.send(JSON.stringify(student))
    } catch (e) {
        console.log('无效token')
        res.status(403).send({
            status:'error',
            data:'无效token'
        })
    }
})

app.post('/login',(req, res) =>{
    const {username,password}=req.body
    if (username==='admin'&&password==='123456') {
        const token = jwt.sign({id: '001', nickname: '超级管理员', username: 'admin'},'key',{
            expiresIn: '1d',
        });
        res.send({
            status: 'OK',
            data: {
                token,
            }
        })
    }
    else {
        res.status(403).send({
            status:'error',
            data:'用户名或密码错误'
        })
    }

})