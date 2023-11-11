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

函数可以没有`return`，这种函数的默认返回值为`undefined`

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

## 调用内部函数

将内部函数作为函数的返回值可调用内部函数

```js
function fun1(){
    let x=1
    return function fun2(){
        console.log(x)
    }
}
let outer=fun1()
outer()
```

# 函数表达式

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

## 函数变为表达式

我们知道匿名函数的定义与调用：

```js
let res=function(){
    函数体
}
res()
```

我们可以将匿名函数看作一个整体，在代码中可以将其用括号括起。括号内的表达式将优先计算，而表达式一定要有运行结果，这个结果就是函数本身。当得到函数本身时就可以使用函数`()`调用了

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

## 使用其他符号转为表达式

使用+，!等也可以使函数成为表达式，成为函数表达式之后便可以直接调用

```js
+function(){...}()
 !function(){...}()
 ~function(){...}()
```

其中+的执行效率是最高的

```js
!function () {
    //function
}()
!function () {
    //function
}()
```



## 立即执行函数的应用

将各自的代码写入立即执行函数中可以避免**变量的污染**

```js
 ;(function () {
     let i=2
 })()
 ;(function () {
     let i=5
 })()
```

但是使用立即执行函数，将无法访问对方内部的变量



# 箭头函数

箭头函数是ES6新增的语法

## 基本语法

箭头函数引入目的是简化函数的书写。箭头函数常用于匿名函数书写的地方

在箭头函数中没有this。

```js
(参数列)=>{
    //函数体
}
```



```js
const fun=function(){
    console.log('hello')
}
```

- 箭头函数，省略了function：

```js
const fun= ( )=>{
    console.log('hello')
}
```

- 当箭头函数中只有一个参数可以省略`()`

  ```js
  x=>{
      console.log(x)
  }
  ```

- 函数体只有一行代码可以省略`{}`

  ```js
  x=> console.log(x)
  ```

- 当唯一的代码是return语句，则return也可以省略

  ```js
  x=> x+x
  //return x+x
  ```


- 当返回的是一个对象时，需要使用括号包起

```js
const res=uname=>({name:uname})
```



# 函数柯里化

```js
function fun(x,y){}
```

假设x只可能存在两个值：1或2

```js
fun(1,111)
fun(1,22222)
fun(2,89)
...
```

我们可以将函数进行进一步封装：

```js
function fa(y){
    fun(1,y)
}
function fb(y){
    fun(2,y)
}
```

我们将函数的变量从2个简化成了1个

```js
fa(111)
fa(22222)
fb(89)
```

JS官方提供了一个解决方案**简化了封装的过程**：

```js
const fa=fun(1)
const fb=fun(2)
```

```js
fa(111)
fa(22222)
fb(89)
```

多个参数的封装

```js
function f(x,y,z){}
const f=fun(1)(2)
f(9)//z=9
```

