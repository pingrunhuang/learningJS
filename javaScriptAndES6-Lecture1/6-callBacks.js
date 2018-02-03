function doSomething(callbacks) {
    setTimeout(function() {callbacks('callback get called')}, 1000)
    console.log('callback is holding...')
}

doSomething(console.log)
