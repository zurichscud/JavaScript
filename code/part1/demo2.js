// 简易的用户登录场景
while(true)
{
    let name=prompt("请输入用户名")
    let password=prompt("请输入密码")
    if(name==='admin'&&password==='123456')
    {
        alert("登录成功")
    break
    }
    else{
        alert("用户名或密码错误,请重试")
    }
}