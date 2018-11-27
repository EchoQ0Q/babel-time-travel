//例一
const MyClass = class Me {
    getClassName() {
      return Me.name;
    }
};

let inst = new MyClass();
inst.getClassName() // Me
Me.name // ReferenceError: Me is not defined

//例二
//采用 Class 表达式，可以写出立即执行的 Class。
let person = new class {
    constructor(name) {
      this.name = name;
    }
  
    sayName() {
      console.log(this.name);
    }
}('张三');
  
person.sayName(); // "张三"

