# 数组

## 基本语法

```js
let names=['张三','李四','王五']
```

数组可以存储任意类型的数据

```js
let arr=[1,'pink',undefined,{name:'张三',age:12 },[1,2,3]]
```



## API

- `length` 长度

- `push`增加内容

  可以将一个或多个元素添加至数组的末尾，并返回数组的新长度

  ```js
  let arr=[]
  let num=arr.push('李瑞','陈佳宁')
  console.log(num)//2
  ```

- `unshift`增加内容

  可以将一个或多个元素添加至数组的开头，并返回数组的新长度

  ```js
  let arr=['王顺五']
  let num=arr.unshift('李瑞','陈佳宁')
  console.log(num)//3
  ```

- `pop`删除内容

  删除数组最后一个元素，并返回该元素的值

  ```js
  let arr=['王顺五','陈佳宁']
  let value=arr.pop()//'陈佳宁'
  ```

- `shift`删除第一个元素，并返回该元素的值

  ```js
  let arr=['王顺五','陈佳宁']
  let value=arr.shift()//王顺五
  ```

- `splice`删除指定索引的数组元素

  ```js
  arr.splice(start,deletecount)
  arr.splice(start)//没有指定个数，则删除到结尾
  ```

  - start起始位置
  - deletecount 删除元素的个数

  ```js
  let names=['张三','李四','王五']
  names.splice(1,1)//删除李四
  ```


# 对象

对象（Object）是一种引用数据类型

## 对象声明

```js
let 对象名={
    属性名:属性值,
    方法名:函数
}
```

`{}`表示对象的字面量，对象具有属性和方法

```js
let person={
    name:张三',
    age:18,
    sex:'男'
}
```

## 属性访问

- 使用`.`访问属性

  ```js
  person.name//张三
  ```

- 使用`[]`访问属性，使用该方法属性名需要加上引号

  ```js
  person[‘name’]//张三
  ```

## 对象方法

### Before ES6

对象中的成员方法由`函数名:匿名函数`构成。成员方法与其他成员需要有逗号分隔

```js
let person={
    name:'张三',
    sayhi: function(){
        document.write('hi~~')
    }
}
```

调用对象的方法：

```js
person.sayhi()
```

JS中的对象的方法可以进行更改：

```js
person.sayhi()=function(){
   document.write('hello')
}
```

### ES6

ES6中新增一种更加简约的向对象中添加方法的方式：

`函数名(){}`

```js
var person = {
    firstName: "John",
    lastName: "Doe",
    sayHello() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

person.sayHello(); // 输出 "Hello, my name is John Doe"

```



## 对象成员的增加

在声明一个对象之后，可以新增对象的成员

```js
对象名.新成员名=value
```
对象中如果不存在该成员，则新增这个成员
```js
let person={
    name:'张三',
    age:18,
    sex:'男'
}
person.password='123456'
person.fun=function(){
    //函数体
}
```

## 对象成员的删除

```js
delete 对象名.成员名
```

## 遍历对象

key是属性名。数据类型为string

```js
for (let key in 对象名){
    
}
```

不能使用`对象.成员名`，应该用`对象[成员名]`

```js
let person={
    name:'张三',
    age:18,
    sex:'男'
}
for( let key  in person)//key='name'，'age'，'sex'
    {
        //console.log(person.key)
        console.log(person[key])
    }
```

# 内置对象

## Math

- `random`

  生成*[0,1)*之间的随机数(浮点数)

  ```js
  let num=Math.random()
  let num =Math.random()*(max-min)+min//[min,max)之间的随机数（浮点）
  et num =Math.floor(Math.random()*(max-min))+min
  ```

- `ceil`

  向上取整

  ```js
  Math.ceil(1.1)//2
  ```

- `floor`

  向下取整

  ```js
  Math.floor(1.1)//1
  ```

- `round`

  就近取整

  ```js
  Math.round(1.3)//1
  Math.round(1.5)//2【取大】
  Math.round(1.6)//2
  ```

- `max`

  最大值

  ```js
  Math.max(1,2,6)//6
  ```

- `min`

  最小值

  ```js
  Math.min(1,2,6)//1
  ```

- `pow(base, exponent)`

  幂运算：求base的exponent次方

- `abs`

  绝对值

  ```js
  Math.abs(-2)//2
  ```

  
