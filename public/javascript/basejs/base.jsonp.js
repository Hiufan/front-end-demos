/**
 *	jsonp 原始jsonp
 */

var id = 0;
var jsonp = function (url, params, callback) {
    var xhr = {
            id: ++id
        },
        callbackName = 'base_jsonp_' + xhr.id,
        script = document.createElement('script');

    // 清理 JSONP Callback 函数
    xhr.abort = function () {
        script.parentNode.removeChild(script);
        if (callbackName in window) {
            window[callbackName] = null;
        }
        try {
            delete window[callbackName];
        } catch (e) {}
    };

    // JSONP Callback
    window[callbackName] = function (data) {
        xhr.abort();
        callback(data);
    };

    // 处理 error
    script.onerror = function () {
        xhr.abort();
        // error(xhr);
    };

    url = param(params, url);

    if (!(/[&?]callback=/.test(url))) {
        url = url + (url.indexOf('?') < 0 ? '?' : '&') + 'callback=?';
    }
    script.src = url.replace('=?', '=' + callbackName);
    document.head.appendChild(script);
    return xhr;
};

// 序列化对象 {a: 1, b: 2, c: 'd e'} 为 'a=1&b=2&c=d+e' 形式的 querystring
// 若指定 appendTo，则将 appendTo 视为 url，并返回追加 querystring 后的 url
// 否则直接返回 querystring
var param = function (data, appendTo) {
    var stack = [],
        query;

    each(data, function (value, key) {
        stack.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    });
    query = stack.join('&').replace(/%20/g, '+');

    if (typeof appendTo === 'string') {
        query = appendTo + (query.length > 0 ?
            (appendTo.indexOf('?') < 0 ? '?' : '&') + query :
            '');
    }

    return query;
};



/**
 *	扩张方法
 */

var objProto = Object.prototype,
    arrProto = Array.prototype,
    toString = objProto.toString,
    hasOwn = objProto.hasOwnProperty,
    slice = arrProto.slice;

// 返回对象的类型
var _type = function (obj) {
    var type;
    if (obj == null) {
        type = String(obj);
    } else {
        type = toString.call(obj).toLowerCase();
        type = type.substring(8, type.length - 1);
    }
    return type;
};


// 遍历数组或对象，当迭代函数返回 false 时终止
var each = function (obj, iterator, context) {
    /*jshint curly: false */
    var i, l, type;
    if (typeof obj !== 'object') return;

    type = _type(obj);
    context = context || obj;
    if (type === 'array' || type === 'arguments') {
        for (i=0, l=obj.length; i<l; i++) {
            if (iterator.call(context, obj[i], i, obj) === false) return;
        }
    } else {
        for (i in obj) {
            if (hasOwn.call(obj, i)) {
                if (iterator.call(context, obj[i], i, obj) === false) return;
            }
        }
    }
};