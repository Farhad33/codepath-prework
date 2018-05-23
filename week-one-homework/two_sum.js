function (input, target) {
	var obj = {};
	for(var i = 0; i < input.length; i++) {
		if(obj[target - input[i]]){
			return [obj[target - input[i]], (i + 1)];
		}
		if(!obj[input[i]]) {
			obj[input[i]] = i + 1;
		}
	}
	return [];
}
