interface Bird {
  sing():void,
  fly: boolean
  // [propNames:string]: any
}

interface Dog {
  bark():void
  // [propNames:string]: any
}

// function trainAnimalSecond(animal: Bird | Dog) {
//   if ('sing' in animal) {
//     animal.sing();
//   } else {
//     animal.bark();
//   }
// }

// 断言
// function trainAnimal(animal: Bird | Dog) {
//   if ((animal as Bird).fly) {
//     (animal as Bird).sing();
//   } else {
//     (animal as Dog).bark();
//   }
// }
function trainAnimal(animal: Bird | Dog) {
  if ((<Bird>animal).fly) {
    (<Bird>animal).sing();
  } else {
    (<Dog>animal).bark();
  }
}
// function trainAnimal(animal: Bird | Dog) {
//   animal.sing() // 提示报错，因为不知道 animal 有没有 sing
// }