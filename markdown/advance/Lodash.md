# Lodash

https://www.lodashjs.com/

是一个轻量的JS工具库



# 防抖

## 防抖

debounce防抖，频繁触发事件，但是**只执行最后一次**

![image-20231113205447826](assets/image-20231113205447826.png)

王者荣耀回城，只要被打断，就需要重新开始。

## 防抖实现

使用`lodash`库的`debounce`函数进行实现：

```js
    function f() {
        console.log('哈哈哈')
    }
    document.querySelector('button').addEventListener('click',_.debounce(f,1000))
```

```js
_debounce(func,wait)
```

创建一个防抖函数，该函数会从上一次被调用func后，延迟 `wait` 毫秒后再调用 `func` 方法