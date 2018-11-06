function sayHello() {
  console.log('hello')
}

function sayGoodbye() {
  console.log('goodbye')
}

console.log('a')
console.log('b')

setTimeout(sayHello, 2000)

console.log('c')

setTimeout(sayGoodbye, 1000)

console.log('d')
