// 两种写法
const fn1 = (str: string): number => {
  return +str;
};

const fn2: (str: string) => number = (str) => {
  return +str;
};

const resFn1: number = fn1("1");
const resFn2: number = fn2("2");

console.log(resFn1, resFn2);

// 无返回值
const fn3 = (): void => {};

// 不会反回
const fn4 = (): never => {
  // while (true) {}
  throw new Error();
};

// 传参
const fn5 = ({ name = "2" }: { name: string } = { name: "1" }): void => {
  console.log(name);
};
fn5(); // '1'
// fn5({});// 报错，name必填，
