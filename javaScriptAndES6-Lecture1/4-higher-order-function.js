const arr = [1,2,3,4,5]
const map = function(arr, func){
    const newArr = []
    // note that we are using let here 
    for (let i=0;i<arr.length;i++){
        newArr.push(func(arr[i]))
    }
    return newArr
}

const map2 = function(arr, func){
    const newArr=[]
    arr.forEach(function(x){ newArr.push(func(x)) })
    return newArr
}

const addOne = function(x) { return x+1 }


console.log(arr.map(addOne))
console.log(map(arr, addOne))
console.log(map2(arr, addOne))

// how to define isLargerThenX
const isLargerThenOne = function(x){ return x>1 }

console.log(arr.filter(isLargerThenOne))

const sum = function(x, y) { return x+y}

console.log(arr.reduce(sum))

