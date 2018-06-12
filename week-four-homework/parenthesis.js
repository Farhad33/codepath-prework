function generateParenthesis(n) {
	var arr = []
	backtrack(arr, "", 0, 0, n);
	return arr;
}
function backtrack(arr, cur, open, close, max){
	if (cur.length == max * 2) {
		arr.push(cur);
		return;
	}
	if (open < max)
		backtrack(arr, cur+"(", open+1, close, max);
	if (close < open)
		backtrack(arr, cur+")", open, close+1, max);
}
