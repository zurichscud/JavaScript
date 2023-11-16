// 创建一个新的XHR对象，xhr表示请求信息
const xhr = new XMLHttpRequest()
// 设置请求信息
xhr.open('GET','http://localhost:8080/students')
// 发送请求
xhr.send()