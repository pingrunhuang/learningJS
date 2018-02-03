function makeFunctionHello(){
   const message = 'hello!'
   function sayHello(){
       console.log(message)
   }
   return sayHello
}

const sayHello=makeFunctionHello()
// actually undefined in both cases
console.log('type of message:', typeof message)
console.log('type of message:', typeof sayHello.message)

console.log(sayHello.toString())
sayHello()

