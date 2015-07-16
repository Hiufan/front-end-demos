var _ = require('./underscore');

/*============
	config
=============*/
var obj = {
	'name1': 'value1',
	'name1': 'value1',
	'name1': 'value1'
};
var arr = ['arr1', 'arr2', 'arr3'];

function funct(){
	console.log('i am function');
}

/*==========================*/

// test isObject
// console.log(typeof arr);
// console.log(_.isObject(obj));
// console.log(_.isObject(funct));

// console.log(arr.slice());

// // something news
// console.log(Object.keys(obj));

console.log(

_.map({one: 1, two: 2, three: 4}, function(num, key){ return num * 3; })

)