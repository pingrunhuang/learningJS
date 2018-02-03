function printOne(){
    console.log('One')
}

function printTwo(){
    console.log('Two')
}

function printThree(){
    console.log('Three')
}

// async function
setTimeOut(printOne, 1000)
setTimeOut(printTwo, 0)
printThree()

// the sequence is 3 -> 2 -> 1
// explanation:
// 1. the first and second call of setTimeOut will be added to the api set. 
// 2. the printThree() is added to the function queue. 
// 3. there exists an event loop check for the queue to see if something could be added from the queue to a function stack constantly and found the printThree function
// 4. the browser wait for 1s for the printOne function
// 5. the browser wait for 0s for the printTwo function and add the function to the function queue which then add the printTwo to the function stack 

// basically, function stack take care of sequence of calls inside a function while the function queue take care of the sequence of the function call inside a program
// there is an event loop in javascript take care of transfering the function in the stack to the main queue
// there are 3 zones in the memory, api zone for the external libraries call, queue for the main function call and stack for the inner function call
