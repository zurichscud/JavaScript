# function

Javascript中的函数主要用于网页中**某个功能的复用**

## 函数声明

```js
function 函数名(形参列){
    函数体
}
```
## 函数参数

```js
function getSum(num1 , num2)
{
    document.write(num1+num2)
}
getSum(10,20)
```

- 形参处相当于执行了let num1和let num2。如果没有赋值，则形参列的类型为`undefined`
- JS中的**实参**可以为**任何类型**，因为JS声明变量时，并不知道变量的类型。

```js
function fun(arr){
    函数体
}
fun([1,2,3])
```

等价于

```js
let arr =[1,2,3]
```

### 默认参数

JS支持使用默认参数以避免调用函数时没有传参。当传入参数时，默认参数将失效

```js
function fun(x=0,y=0){
    函数体//x=0，y=0
}
fun()
```



## 函数返回值

`prompt`是一个函数，他的返回值是用户输入的数据。使用`return`关键字返回值

JS中的返回值不需要声明返回值类型

```js
function sum(a,b)
{
    a=a||0
    b=b||0
    return a+b
}
```

函数可以没有return，这种函数的默认返回值为`undefined`

```js
function sum(a,b)
{
    a=a||0
    b=b||0
    a+b
}
let num= sum(1,2)
typeof num //undefined
```

return只能返回一个值，如果要返回多个值则可以封装成数组

```js
return [a,b]
```

## 函数嵌套声明

JS函数可以嵌套声明

```js
function fun1(){
    function fun2(){
        alert('函数嵌套')
    }
    fun2()
}
fun1()
```

**JS函数可以当作一个变量类型**，如果在函数内定义一个函数，相当于在该函数内定义了一个变量，该变量遵从函数作用域，即只能在函数内使用

```js
function fun1(){
    function fun2(){
        alert('函数嵌套')
    }
}
fun2()//fun2 is not defined
```

> **attaction**:
>
> 如果在函数内赋值一个变量，但是该变量没有声明，则JS会将其当作全局变量
>
> ```js
> function fun3(){
>     i=2
> }
> fun3()
> alert(i)//2
> ```
>
> 不建议这样使用，引起该问题的原因是因为JS中可以不声明直接赋值变量
>
> ```js
> j=1
> alert(j)//1
> ```
>
> 

## 匿名函数

匿名函数声明：

```js
let 变量名=function (形参列){
    函数体
}
```

匿名函数也称为函数表达式，将匿名函数赋值给一个变量

```js
let res=function(){
    alert('hello,world')
}
```

，使用变量名直接调用匿名函数：

```js
res()
```

### 立即执行函数

我们知道匿名函数的定义与调用：

```js
let res=function(){
    函数体
}
res()
```

可以知道变量名res等价于等号后面的内容，我们可以将后面的内容直接替换调用函数时的变量名，直接省去变量名。

相当于在函数调用时才声明函数，加上括号是将其当成一个整体。

```js
(function(形参列){
    函数体
}) (实参列)
```

该函数会立即执行

```js
(function(x,y){
    alert(x+y)
}) (1,2)
```

立即执行函数的写法二：

```js
(function(形参列){
    函数体
}  (实参列))
```

> **Attaction**:
>
> 多个立即执行函数之间需要使用`;`分隔，否则会报错。
>
> 为防止出错，建议每个立即执行函数之前都添加一个分号
>
> ```js
>     ;(function () {
>         document.write('立即执行函数1')
>     })()
>     ;(function () {
>         document.write('<br>')
>         document.write('立即执行函数2')
>     })()
> ```
>
> 
