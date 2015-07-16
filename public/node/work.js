var http = require('http')



module.exports = function(){
	process.on('message', function (data){
		console.log(process.pid, 'message:', data)
	})

	http.createServer(function (req, res){
		console.log('process send message')
		process.send('msg')

		res.writeHead(200)
		res.end(process.pid + 'hello world\n')
	}).listen(8000, function () {
	    console.log(process.pid)
	})	
}