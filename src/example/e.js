

const e = `

//在所有函数参数中，只有最后一个才可以被标记为不定参数。函数被调用时，不定参数前的所有参数都正常填充，任何“额外的”参数都被放进一个数组中并赋值给不定参数。如果没有额外的参数，不定参数就是一个空数组，它永远不会是 undefined。
function containsAll(haystack, ...needles) {
    for (var needle of needles) {
        if (haystack.indexOf(needle) === -1) {
            return false;
        }
    }
    return true;
}

//ES6 引入了一种新方式，可以指定任意参数的默认值。默认值表达式在函数调用时自左向右求值，且没有默认值的参数隐式默认为 undefined。
function animalSentence(animals2="tigers", animals3="bears") {
    return \`Lions and \${animals2} and \${animals3}! Oh my!\`;
}

`.trim();

export default e;