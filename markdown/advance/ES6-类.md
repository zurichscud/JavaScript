# 类

JS新特性：新增了面向对象的语法

## 声明类

```js
class 类名 {类的声明}//常用
const 类名 =class{类的声明}
```

```js
new 类名()
```

new会调用构造函数

```js
class Pig {
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    static props='静态属性'
    sayHello(){
        console.log('Hello')
    }

}
const p=new Pig('猪爸爸',30)
```

实际上new先创建了空对象（`this=[]`），构造函数返回了该对象(`return this`)，并将其赋给了p，因此`this=p`，可以理解成实例p调用了构造函数

使用面向对象语法创建的对象仍然遵从对象的特性，可以直接对对象的属性进行操作（CRUD）



# 封装

# 继承



# 多态

