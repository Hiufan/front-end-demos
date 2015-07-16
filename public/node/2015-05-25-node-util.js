var util = require('util')
var format = util.format

var obj = {
	test: 'test',
	aaaa: 'aaaa'
}

var arr = [
	'test=test',
	'_tm=1203284343'
]

console.log(format('%s:%s', 'foo'))
console.log(format(obj))
console.log(format('%x', arr))
console.log(util.inspect(obj))
console.log(util.log(obj))
