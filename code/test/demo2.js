function Person(){}
Person.sex = "男";  // 静态属性 sex
Person.sayName = function (){ // 静态方法 sayName
    console.log('Hellow World'); 
}

console.log(Person.sex);

const str=new String('lai')
console.log(str);
const arr=new Array([1,2,3])
console.log(arr);
const pig=new Object({uname:'佩奇',age:21})
console.log(Object.keys(pig));