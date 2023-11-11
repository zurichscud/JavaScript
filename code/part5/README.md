# BOM

## 学生信息表

新增，删除，渲染业务
渲染需要使用到map函数和join函数
表单检测不为空
数据持久化

## 支付成功自动跳转

## 注册

手机号正则：`^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$`
验证码正则：`^\d{6}$`
密码正则：`^[a-zA-Z0-9-_]{6,20}$`
提交的条件：勾选我已阅读，且表单各个字段都验证通过
不通过验证需要阻止提交

> 注意`return`的使用

错误实例：

```js
function verify(field,reg,info) {
    field.addEventListener('change',function () {
        if (!reg.test(field.value)){
            field.nextElementSibling.innerHTML=info
            return false
        }
        field.nextElementSibling.innerHTML=''
        return true
    })

}
```

在回调函数内声明return，并不是verify的返回值

代码重构思想：先把基本单元做出，再考虑代码的复用

下一步和每次的输入都需要验证，验证指的是还需要提示错误信息

#商品放大效果
鼠标在middle中的位置x=e.pageX-middle.getBoundClientRect().left
y=e.pageY-middle.getBoundClientRect().top
getBoundClientRect()是相当于浏览器视窗的距离，因此y还需要减去滚动值scrollTop
- 背景图片移动
backgroundPositionX、backgroundPositionY
`background.size=800*800`
# demo
