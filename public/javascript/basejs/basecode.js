/**
 *	basecode.js 
 *	basecode is some function to realize javascript
 */


// 返回对象的类型
var type = function (obj) {
    var type;
    if (obj == null) {
        type = String(obj);
    } else {
        type = Object.prototype.toString.call(obj).toLowerCase();
        type = type.substring(8, type.length - 1);
    }
    return type;
};