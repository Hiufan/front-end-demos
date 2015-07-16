var _after = function(times, func){
	if(times <= 0) return func;

	return function (){
		if(--times <= 0){
			// console.log(this);
			// console.log(arguments)
			return func.apply(this, arguments);
		}
	};
};

function _log() {
	console.log('--------');
}

var test = _after(2, _log);

test();
test();