# Object

## Object函数

JavaScript 中的 `Object` 是一种核心数据类型，也是一种构造函数。它用于创建对象，是 JavaScript 中的基本数据结构之一

```
typeof Object
```

> 'function'

## 对象简写（ES6）

在对象中我们可以再声明一个对象：

```js
{
    age:12
    address:{
        city:'beijing'
        way:'West'
    }
}
```

我们可以将该address声明在外面

```js
    address:{
        city:'beijing'
        way:'West'
    }
{
    age:12
    address:address

}
```

ES6中可以将其省略成：

```js
{
    age:12
    address
}
```

