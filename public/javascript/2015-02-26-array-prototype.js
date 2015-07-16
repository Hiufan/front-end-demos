/**
 * prototype functions 一些js原生的functions的学习
 */

function _log() {
    console.log()
}


// Array
var arr = [0, 1, 2, 3]
var arrstr = ['aa', 'bb', 'cc']
var colors = ['red', 'blue', 'green']

/**
 * isArray 检测数组	
 */
console.log('isArray: ', Array.isArray(arr))

/**
 * toString() toLocaleString()
 */
console.log('toString: ', colors.toString())

/**
 * pop() push() 	
 */
colors = ['red', 'blue', 'green']
console.log('pop(): ', colors.pop(), 'current colors: ', colors)
console.log('push(): ', colors.push('pink'), 'current colors: ', colors)

/**
 * shift() unshift()	
 */
colors = ['red', 'blue', 'green']
console.log('shift(): ', colors.shift(), 'current colors: ', colors)
console.log('unshift(): ', colors.unshift('pink'), 'current colors: ', colors)

/**
 * reverse() sort()	
 */
var vals = [1, 2, 15, 10, 5, 10]
console.log('reverse(): ', vals.reverse()) // [ 5, 10, 15, 2, 1 ]
console.log('sort(): ', vals.sort()) //[ 1, 10, 15, 2, 5 ]

function _compare(v1, v2) {
    return v1 - v2
}
console.log('sort(_compare)): ', vals.sort(_compare))

/**
 * contact() slice(start, end) if not end end will be the array length	
 * @describe 合并 和 裁减
 */
colors = ['red', 'blue', 'green']
console.log('contact(): ', colors.concat('yellow', 'pink', ['aa', 'bb']))
    // [ 'red', 'blue', 'green', 'yellow', 'pink', 'aa', 'bb' ]
console.log('slice(start, end): ', colors.slice(1)) //[ 'blue', 'green' ]
console.log('slice(start, end): ', colors.slice(1, 2)) //[ 'blue' ]

/**
 * splice()
 * @describe 删除和替换
 */
colors = ['red', 'blue', 'green']
console.log('colors: ', colors, 'splice() removed: ', colors.splice(1, 1))
    // insert  replace
colors = ['red', 'blue', 'green']
console.log('colors: ', colors)
console.log('splice() insert: ', colors.splice(1, 1, 'yellow', 'pink'))

/**
 * indexOf() lastIndexOf()	
 * @describe 是否存在某一项
 */
var numbers = [1, 2, 15, 10, 5, 10, 3, 4, 2, 1]
console.log('indexof(): ', numbers.indexOf(10)) // 3 return the first pick
console.log('lastIndexOf(): ', numbers.lastIndexOf(10)) // 5 

/**
 * 	every() some() filter() forEach() map()
 *	@describe 遍历 过滤
 */
// every if one element < 10 the result is false 
// return Boolean
function isBigEnough(element, index, array) {

    return element >= 10
}
var every1 = [12, 5, 8, 130, 44].every(isBigEnough) // false
var every2 = [12, 54, 18, 130, 44].every(isBigEnough) // true
console.log('every1: ', every1, 'every2: ', every2)

// some() return Boolean
function isBiggerThan10(element, index, array) {
  	return element > 10
}
var some1 = [2, 5, 8, 1, 4].some(isBiggerThan10)	// false
var some2 = [12, 5, 8, 1, 4].some(isBiggerThan10)	// true
console.log(some1, some2)



// filter() return an filter Array
var filtered = [12, 5, 8, 130, 44, 100].filter(function (element) {
        return element >= 10
    })
// filtered is [12, 130, 44]
console.log('filter: ', filtered)
// 
var arr = [
  	{ id: 15 },
  	{ id: -1 },
  	{ id: 3 },
  	{ id: 12.2 },
  	{ },
  	{ id: null },
  	{ id: NaN },
  	{ id: 'undefined' }
]
var invalidEntries = 0
function filterByID(element) {
    if (element.id && typeof(element.id) === 'number') {
        return true;
    } else {
        invalidEntries++;
        return false;
    }
}
var arrByID = arr.filter(filterByID);
console.log('Filtered Array = ', arrByID); // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
console.log('Number of Invalid Entries = ', invalidEntries); // 4

// forEach() return underfind no return
[2, 5, 1, 9].forEach(function (element, index, cur){
	console.log(index, element, cur)
})

// map() return a new Array 
var nums = [1, 4, 9]
var doubles = nums.map(function (num) {
  	return num * 2;
})
// doubles is now [2, 8, 18]. nums is still [1, 4, 9]
console.log('nums is still', nums, 'doubles is now', doubles)

var str12 = '12345'
var reverseStr = Array.prototype.map.call(str12, function (x) {
	console.log(x)
  	return x;
}).reverse().join('')
console.log(str12, reverseStr)


/**
 * reduce() reduceRight()	
 */

var total = [0, 1, 2, 3].reduce(function (a, b) {
	console.log('a: ', a , 'b: ', b)
    return a + b
})
// total == 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
	console.log('a: ', a , 'b: ', b)
    return a.concat(b)
})
// flattened is [0, 1, 2, 3, 4, 5]

// reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）




// Object
