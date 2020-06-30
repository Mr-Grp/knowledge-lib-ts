class PersonClass {
  name = "TS";
  getName() {
    return this.name;
  }
}
const person1 = new PersonClass();

// 继承
class TeacherClass extends PersonClass {
  teacher = "Teacher";
  name = "11";

  getTeacher() {
    return this.teacher;
  }
}

const t = new TeacherClass();
console.log(t.getName());
console.log(t.getTeacher());

// 重写
class Teacher1Class extends PersonClass {
  teacher = "Teacher";
  getName() {
    return this.teacher;
  }
}

const t1 = new Teacher1Class();
console.log(t1.getName());

// 访问类型
// public 默认,公有访问
// private 只允许类内部调用，子类方法不能通过 this 调用，只能通过父类的方法使用，同理子类也不能重写
// protected 允许在类内和子类中使用

// super
class Teacher extends PersonClass {
  teacher = "Teacher";
  getName() {
    return super.getName() + this.teacher;
  }
}

const t2 = new Teacher();
console.log(t2.getName());

// 构造器
class PersonC {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
// 简化写法
class PersonC1 {
  constructor(public name: string) {}
}

//getter & setter
class PersonGetter {
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = "name:" + value;
  }
}
const personGetter = new PersonGetter("TS");
console.log(personGetter.name);
personGetter.name = "nemo";
console.log(personGetter.name);

// 单例模式
class PersonSingle {
  private static instance: PersonSingle;
  private constructor() {}
  static getInstance() {
    if (PersonSingle.instance) {
      return PersonSingle.instance;
    }
    return (PersonSingle.instance = new PersonSingle());
  }
}
const pS = PersonSingle.getInstance();
const pS1 = PersonSingle.getInstance();
console.log(pS === pS1);

// 抽象类
abstract class Animal {
  public abstract name: string;
  public abstract getName(): string;
}

class Cat extends Animal {
  public readonly name: string = "1";
  getName() {
    return this.name;
  }
}
