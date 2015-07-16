
var express = require('express')
var app = express()
var fs = require('fs')
var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs())
app.set('port', (process.env.PORT || 3333))
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

var front = ['css', 'javascript', 'mvvm', 'node', 'react']
function getMap(){	
	var map = []
	front.forEach(function (ele){
	map.push({
			cat: ele,
			list: fs.readdirSync('./public/' + ele)
		})
	})
	return map
}
app.get('/', function(req, res) {
    res.render('index.handlebars', {
        title: 'front',
        front: front,
        map: getMap()
    })
})
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})