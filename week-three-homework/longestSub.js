function subSequence(str) {
	let len = str.length;
	let output = '';
	let result = [];
	for (var i = 1; i < Math.pow(2, len); i++) {
		output = '';
		for (var j = 0; j < len; j++) {
			if (i & (1 << j)) {
				output += str[j];
			}
		}
		result.push(output)
	}
	return result;
}

function subString(a) {
	var arr = []

	for (var i = 0; i < a.length; i++) {
		for (var j = i; j < a.length; j++) {
			arr.push(a.slice(i, j + 1));
		}
	}
}


function longestSubsequence(x, y) {
	let arr1 = subSequence(x);
	let arr2 = subString(y);
	let long = 0;
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] == arr2[j] && long < arr1[i]) {
				long = arr1[i].length;
			}
		}
	}
	return long;
}
