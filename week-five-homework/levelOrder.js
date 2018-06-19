function Node(data=null, left=null, right=null, level=0) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.level = level;
}

function traversal(A) {
	if (root == null) return null;
	var queue = [];
	var nodeValues = [];
	root.level = 0;
	queue.push(root);
	while (queue.length !== 0) {
		var node = queue.shift();
		if (nodeValues[node.level]) {
			nodeValues[node.level].push(node.data);
		} else {
			nodeValues[node.level] = [node.data];
		}
		console.log(node.data);
		if (node.left !== null) {
			queue.push(node.left);
			node.left.level = node.level + 1;
		}
		if (node.right !== null) {
			queue.push(node.right);
			node.right.level = node.level + 1;
		}
	}
	return nodeValues;
}

var root = new Node(3);
root.left = new Node(1);
root.right = new Node(5);
root.right.right = new Node(6);
root.right.right.right = new Node(7);
traversal(root);









function levelOrder(A) {
	var nodeValues = [];
	if (A !== null) traversal(nodeValues, 0, A);
	return nodeValues;
}

function traversal(nodeValues, counter, root) {
	if (nodeValues[counter]) {
		nodeValues[counter].push(root.data);
	} else {
		nodeValues[counter] = [root.data];
	}
	counter++;
	if (root.left !== null) traversal(nodeValues, counter, root.left);
	if (root.right !== null) traversal(nodeValues, counter, root.right);
}
