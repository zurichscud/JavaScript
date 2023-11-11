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

# forEach

forEach用于遍历数组中的每个元素，并将元素传递给回调函数

```js
数组.forEach(function(item，index){
    //函数体
})
```

- `item`：当前数组元素
- `index`：可选参数，当前元素索引

# filter



filter方法创建一个新的数组，新数组中的元素是通过检查数组中符合条件的所有元素

```js
数组.filter(function(item,index){
    return 条件
})
```

`filter`将会返回符合条件的元素组成的新数组，条件为true则返回该元素，否则过滤该元素

```js
const arr=[10,20,30]
arr.filter(function(item){
    return item>=20
})
```

