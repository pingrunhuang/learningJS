function makeFunctionArray() {
    const arr = []
    for (var i=0; i<5;i++){
    	arr.push(function() { console.log(i) })
    }
    // this will print out 5 because var is defining the variables' life cicle till the end of the function 
    //console.log(i)
    // instead, if we define the i as `let i`
    // console.log(i) will get an not defined error since 
    return arr
}

const functionArr = makeFunctionArray()
// invoking the first function, instead of printing 0, it logs 5
// it is because we define the i as var, so the i is expected to be overwitten by each iteration which means every element will print out 5
// if we change the `var i` to `let i`, then the print out function will work just fine
functionArr[3]()

// summary: var declare a variable to be just one, let will create one each time
