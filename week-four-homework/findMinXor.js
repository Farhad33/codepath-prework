function findMinXor(nums) {
	nums.sort(function(a, b) { return a - b; });
	var min = nums[0] ^ nums[1];
	for (var i = 0; i < nums.length; i++) {
		if (nums[i + 1] && min > (nums[i] ^ nums[i + 1])) {
			min = nums[i] ^ nums[i + 1]
		}
	}
	return min;
}
