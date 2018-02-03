const url = 'www.baidu.com'

fetch(url).then(function(res){
    console.log('deal with the result...')
}).then(function(json){
    console.log()
}).then(function(data){
    console.log('deal with the data')
})
