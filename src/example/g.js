const g = `
/*
Symbol 是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。Symbol 对象是一个 symbol primitive data type 的隐式对象包装器。

Symbol 数据类型是一个原始数据类型。

Symbol的语法格式：Symbol([description]) //description是可选的
*/

let a = Symbol('a');
let b = Symbol('b');

let obj = {
    [a]: "123",
    [b]: 45
}

const symbolsKey = Object.getOwnPropertySymbols(obj);

for(let value of symbolsKey) {
    console.log(obj[value]) 
}
//"123"
//45

/*
ES6提供了一个注册机制，当你注册Symbol之后，就能在全局共享注册表里面的Symbol。Symbol的注册表和对象表很像，都是key、value结构，只不过这个value是Symbol值。  
语法：Symbol.for() //只有一个参数

还有一个方法是获取注册表的Symbol。
语法：Symbol.keyFor() //只有一个参数，返回的是key
*/

let name = Symbol.for('name');
let name1 = Symbol.for('name1');
let name2 = Symbol.for('name2');

console.log(Symbol.keyFor(name)) // name
console.log(Symbol.keyFor(name1)) // name1
console.log(Symbol.keyFor(name2)) // name2
`

export default g;