function fibsum(n) {
	var fibSequence = fibonacci(n);
	var minNum = 0
	var sum = 0
	for (var i = fibSequence.length - 1; i >= 0; i--) {
		if (sum + fibSequence[i] <= n) {
			sum += fibSequence[i]
			minNum++
		}
		if (sum === n) return minNum
	}
}

function fibonacci(n) {
	var result = [1, 1]
	for (var i = 2; result[i - 1] < n; i++)
		result[i] = result[i - 1] + result[i - 2]
	return result
}


function fibsum(A){
	var count = 0;
	if(A !== 0){
		var val = 1;
		var memo = {0: 0, 1: 1}
		flag = true
		while(memo[val] < A && flag){
			val++
			memo[val] = memo[val-1] + memo[val-2]
			if(memo[val] > A){
				flag = false
				count++
			}
		}
		A -= memo[val-1]
		while(A !== 0){
			while(memo[val] > A){
				val--
			}
			count++
			A -= memo[val]
		}
	}
	return count
}







function fibsum(a) {
	var fibonacci = [1, 1];
	while (fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1] <= a) {
		fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
	}
	var count = 0;
	while (a > 0) {
		while(fibonacci[fibonacci.length - 1] > a) fibonacci.pop();
		var num = fibonacci[fibonacci.length - 1];
		while (a >= num) {
			a -= num;
		}
		count++;
	}
	return count;
}
