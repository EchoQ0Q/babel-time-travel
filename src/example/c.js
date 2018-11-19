const c =  `
//数组解构,并且请注意，数组解构赋值的模式同样适用于任意迭代器。
var [foo, [[bar], baz]] = [1, [[2], 3]];

//对象解构
var complicatedObj = {
    arrayProp: [
        "Zapp",
        { second: "Brannigan" }
    ]
};
var { arrayProp: [first, { second }] } = complicatedObj;

//多重返回值
function returnMultipleValues() {
    return [1, 2];
}
var [foo, bar] = returnMultipleValues();
   
function returnMultipleValues() {
    return {
        foo: 1,
        bar: 2
    };
}
var { foo, bar } = returnMultipleValues();

`.trim();
    
export default c;
