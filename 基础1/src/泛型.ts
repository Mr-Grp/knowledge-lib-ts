// 
{
  const _join = <T, P>(first: T, second: P):P => {return second}
  // 显示指定 T 和 P
  const res:string = _join<number, string>(1, '1');
  // 类型推断
  const res1:string = _join(1, '1');
  console.log(res, res1)
}

// 构造函数
{
  const c = <T extends new (...args: any) => any>(constructor: T): T => {
    return constructor;
  }
  // 构造函数或者类
  class C {}
  const a = c(C);
}

// 类泛型
{
  class A<T extends number | string> {
    constructor(public name: T) {
      this.name = name;
    }
  }
  const a = new A<string>('1')
  const name:string = a.name
}

{
  interface person {
    name: string;
  }
  class A<T extends person> {
    constructor(private person: T) {
      this.person = person;
    }
  }
  new A({ name: 'ts', age: 12 });
}

// 泛型继承
{
  interface person {
    name: string;
  }
  class A<T extends person> {
    constructor(private person: T) {
      this.person = person;
    }
  }
  new A({ name: 'ts', age: 12 });
}

{
  interface Person<T> {
    name: string
    age: number
    summary: T
  }
}