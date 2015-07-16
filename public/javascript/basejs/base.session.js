/**
 * @discribe sessionStorage
 */
var session = {
    get: function (key) {
        var value = window.sessionStorage.getItem(key);
        if (value !== undefined && value !== null) {
            value = JSON.parse(value);
        }
        return value;
    },
    set: function (key, value) {
        if (value !== undefined && value !== null) {
            value = JSON.stringify(value);
        }
        window.sessionStorage.setItem(key, value);
    },
    remove: function (key) {
        window.sessionStorage.removeItem(key);
    }
};