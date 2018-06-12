function permutation(nums) {
	var list = []
	if(nums !== null && nums.length > 0) {
		helper(nums, 0, list);
	}
	return list;
}

function helper(nums, i, list) {
	if (i === nums.length - 1) {
		list.push(nums.slice())
	} else {
		for (let j = i; j < nums.length; j++) {
			nums[j] = [nums[i], nums[i] = nums[j]][0];
			helper(nums, i + 1, list);
			nums[j] = [nums[i], nums[i] = nums[j]][0];
		}
	}
}
