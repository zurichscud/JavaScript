



# ES6 模块化

## 启用ES6模块化

### mjs

默认情况下的js文件为cjs格式，支持的模块化标准为commonjs

我们使用`mjs`作为扩展名，可以启用ES6的模块化标准

### package.json

将模块化规范设置ES6模块化，则当前项目下的所有js文件使用ES6模块化标准

```js
{
    "type":"module"
}
```

type默认为`commonjs`

## 浏览器

浏览器环境中支持ES6模块语法

在 HTML `<script>` 标签中，JS的类型默认是 `type="text/javascript"`，脚本会以传统的脚本方式执行，并不会按照 ECMAScript 模块的规范进行解析。因此，`import`语句在这种情况下是不被支持的。

如果你想使用 ECMAScript 模块，你需要设置 `type="module"`，这样浏览器会将脚本文件解析为模块，从而允许使用 `import` 和 `export`。

```js
<script type="module">
    import { myFunction } from './myModule.js';
    // 使用 myFunction
</script>
```



# export

## 模块导出内容

```js
//将a对外暴露
export let a=10

export const b={name:'lai'}
```







# import

## 导入模块

```js
import "JS文件路径"
```

ES6模块化规范不能省略扩展名

## 导入变量

```js
import {变量} from '模块路径'
```

变量必须与模块内暴露的变量名相同。（类似解构）

### 重命名模块变量

使用as可以为变量重命名

```js
x 1import {模块变量 as 新名字} from '模块路径'
```

```js
import {a as x,b as y} from "./mod.mjs";
```

### 引入所有变量

将暴露的所有变量封装称对象引入

```js
import * as 对象名 from '模块路径'
```

```js
import * as obj from "./mod.mjs";
console.log(obj.a)
console.log(obj.b)
```

根据按需引入的原则，这种写法并不推荐使用

## 导入变量的性质

导入的变量是`const`的，即常量。

```js
//x=1,y=2
import {a as x,b as y} from "./mod.mjs";
x=3//ERROR
```

const修饰的变量不能修改其值

```js
import obj from "./mod.mjs";
obj.newKey='hahaha'
```

const的对象，可以修改其内部的值

## import 提升

import语句在JS文件中将会永远优先于其他代码的执行，也就是说，import语句将会提升至最前

# default



## 导出

默认导出

```js
export default value
```

- value为值

一个模块中只有一个默认导出

默认导出的优点是不用在模块内为其命名，直接可以将value导出。因为没有变量名，因此导入的时候变量名可以自己命名。

## 导入

```js
import 自定义变量 from '模块路径'
```

## 混用

```js
import sum,{a} from 'index.mjs'
```

