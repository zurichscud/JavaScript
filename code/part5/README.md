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
