# 默认导出

只能在ES6环境运行（node环境）

## 环境配置

需要在package.json中添加配置项，用于解决*Cannot use import statement outside a model*

```json
#package.json
"type":"module"
```



## 导出

```js
let 对象名={
    //对象声明
}
export default 对象名;
```

简写方式：

```js
export default 对象名={
        //对象声明
}
```

一个模块中只能有一个默认导出`export default`

## 导入

```js
import 对象名 from '模块路径'
```

导入的对象名可以随意命名

# 解构导出

## 导出

```json
export let a='Beijing'
export let b='XMN'
```

解构导出可以声明多个

## 导入

使用解构语法进行导入

```json
import {a} from './text.js'
import {b} from './text.js'
```

也可以合并写：

```json
import {a,b} from './text.js'
```

默认导出不需要使用解构即可得到

# 运行顺序

import语句在JS文件中将会永远优先于其他代码的执行，也就是说，import语句将会提升至最前