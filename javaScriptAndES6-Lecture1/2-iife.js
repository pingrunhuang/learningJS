// with () at the end means call it immetiately
const sayHello = (function (){
   const message = 'hello!'
   function sayHello(){
       console.log(message)
   }
   return sayHello
})()

const counter = (function() {
    let count = 0
    // return an object
    return {
        inc: function(){ count=count+1 },
        get: function(){ console.log(count) },
    }
})()

// the function get called immediately which access the variable that is unaccessable from the outside
counter.get()
counter.inc()
counter.get()

sayHello()
