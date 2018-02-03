// use iife to solve the problems of bugy closure 
function makeFunctionArray() {
    const arr = []
    for (var i=0; i<5;i++){
    	arr.push( 
             (function(x) { 
                 return function(){ console.log(x) }
             })(i))
    }
    return arr
}

const functionArr = makeFunctionArray()
// using iife, this will print out 0 as expected, since we are calling the function immediately
functionArr[0]()

// summary: so the basic idea behind the iife is to execute the variable each time

