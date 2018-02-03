// 1. refers to an object that's set at the new execution context (which means at the invocation time)
// 2. in the global context refers to global object
// 3. if the function is called as a method of an object, 'this' is bound to the object that the method is called on
const person = {
    name: 'frank',
    greet: function(){console.log(this.name)}
}
// correspond to the 1 rules
person.greet()

const friend = { 
    name: 'david',
}

friend.greet = person.greet
// david: correspond to the 3 rule
friend.greet()

// undefined
const greet = person.greet
greet()

// if we declare a global variable called name, then greet() will call that variabal 
this.name = 'yowon'
// but this will still print undefined if we run it by `node script.js`.
// but if we call it from the node terminal, then it will print out yowon
// this is because the way node handl context. talk more later
greet()


// or we can bound some object to the function
const greet2 = person.greet.bind({name:'bound object'})

greet2()

// or the following ways will invoke the function immediately
person.greet.apply({name:'bound object'})
person.greet.call({name:'bound object'})
