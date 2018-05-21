module.exports = { 
	//param A : head node of linked list
	//return the head node in the linked list
	subtract : function(node){
		var pointer1 = node;
		var pointer2 = null;
		var length = 0;
		while (pointer1) {
			var newNode = new Node(pointer1.data)
			newNode.next = pointer2;
			pointer2 = newNode;
			length++;
			pointer1 = pointer1.next;
		}
		pointer1 = node
		half = Math.floor(length / 2)
		while (half > 0) {
			pointer1.data = pointer2.data - pointer1.data;
			pointer1 = pointer1.next;
			pointer2 = pointer2.next;
			half--;
		}
		return node;
	}
};
