// 类型别名
type User = { name: string };
const userArr: User[] = [{ name: "name" }];

// 接口
// 只读和非必填
interface Person {
  readonly name: string;
  age?: number;
}

// 字面量对象的强校验
const person = { name: "1", sex: "男" };
const p: Person = person; // 不会报错
// const p1: Person = { name: '1', sex: '男' }; // 提示错误

// 非固定字段和函数字段
interface Person1 {
  readonly name: string;
  age?: number;
  say(): string; // 函数
  say1: () => { a: string }; // 函数
  [propName: string]: any; // 非固定字段，只能设置为 any，不然那会和前面冲突
  [propNameNumber: number]: string; // 非固定字段
}
const p2: Person1 = {
  name: "p2",
  say() {
    return "111";
  },
  say1() {
    return { a: "111" };
  },
  propName: "111",
  1: "1",
};

{
  // 继承
  interface Person2 {
    name: string;
    age?: number;
    say(): string;
  }

  interface Teacher extends Person2 {
    position: string;
  }

  // 类使用 interface
  interface Person3 {
    name: string;
    age?: number;
    say(): string;
  }

  class User1 implements Person2, Person3 {
    name = "hello";
    age = 123;
    say() {
      return "hellp";
    }
  }
}

// 函数
interface Fn {
  (str: string): number;
}
const fn: Fn = (str) => +str;

// 可以支持多个函数，包括（重载）
interface Fn1 {
  (str: string): number;
  (str: number, count: number): string;
}
