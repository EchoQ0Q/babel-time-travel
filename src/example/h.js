const h = `
/*
一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
*/

//例一
const arr1 = ['red', 'green', 'blue'];

for(let v of arr1) {
  console.log(v); // red green blue
}

//例二
var arr2 = ['a', 'b', 'c', 'd'];

for (let a in arr2) {
  console.log(a); // 0 1 2 3
}

for (let a of arr2) {
  console.log(a); // a b c d
}

//例三
var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
  console.log(name + ": " + value);
}
// edition: 6
// committee: TC39
// standard: ECMA-262

`.trim();

export default h;
