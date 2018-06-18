// This is Solution for sortedListToBST

import java.io.*;
import java.util.*;

class TreeNode {
	int val;
	TreeNode left;
	TreeNode right;
	TreeNode(int x) { val = x; }
}

class ListNode {
	public int val;
	public ListNode next;
	ListNode(int x) { val = x; next = null; }
}

public class Solution {

	public static void main(String[] args){
		ListNode root = new ListNode(1);
		ListNode node2 = new ListNode(2);
		ListNode node3 = new ListNode(3);
		ListNode node4 = new ListNode(4);
		ListNode node5 = new ListNode(5);
		ListNode node6 = new ListNode(6);
		root.next = node2;
		node2.next = node3;
		node3.next = node4;
		node4.next = node5;
		node5.next = node6;
		sortedListToBST(root);
	}

	public static TreeNode sortedListToBST(ListNode A) {
		ArrayList<Integer> listOfNodes = new ArrayList<Integer>();
		while (A != null) {
			listOfNodes.add(A.val);
			A = A.next;
		}
		int mid = (int)Math.floor(listOfNodes.size() / 2);
		TreeNode root = new TreeNode(listOfNodes.get(mid));
		arrayToBST(root, listOfNodes, 0, mid, listOfNodes.size() - 1);
		return root;
	}

	public static void arrayToBST(TreeNode root, ArrayList<Integer> listOfNodes, int left, int mid, int right){
		if ((mid > left) && (mid - left > 0)) {
			int index = (mid - left) / 2 + left;
			TreeNode leftNode = new TreeNode(listOfNodes.get(index));
			root.left = leftNode;
			arrayToBST(leftNode, listOfNodes, left, index, mid - 1);
		}

		if ((right > mid) && (right - mid > 0)) {
			int rightMid = right - mid;
			int index = rightMid / 2 + ((rightMid % 2 == 0) ? 0 : 1) + mid;
			TreeNode rightNode = new TreeNode(listOfNodes.get(index));
			root.right = rightNode;
			arrayToBST(rightNode, listOfNodes, mid + 1, index, right);
		}
	}
}








// import java.io.*;
// import java.util.*;
//
// class TreeNode {
	// 	int val;
	// 	TreeNode left;
	// 	TreeNode right;
	// 	TreeNode(int x) { val = x; }
	// }
	//
	// class ListNode {
		// 	public int val;
		// 	public ListNode next;
		// 	ListNode(int x) { val = x; next = null; }
		// }
		//
		// public class Solution {
			//
			// 	public static void main(String[] args){
				// 		// if ((0 > 0) && (0 - 0 > 0)) {
					// 		// 	System.out.println("if");
					// 		// }
					// 		ListNode root = new ListNode(1);
					// 		ListNode node2 = new ListNode(2);
					// 		ListNode node3 = new ListNode(3);
					// 		ListNode node4 = new ListNode(4);
					// 		ListNode node5 = new ListNode(5);
					// 		ListNode node6 = new ListNode(6);
					// 		root.next = node2;
					// 		node2.next = node3;
					// 		node3.next = node4;
					// 		node4.next = node5;
					// 		node5.next = node6;
					// 		sortedListToBST(root);
					// 	}
					//
					// 	public static TreeNode sortedListToBST(ListNode A) {
						// 		ArrayList<Integer> listOfNodes = new ArrayList<Integer>();
						// 		while (A != null) {
							// 			listOfNodes.add(A.val);
							// 			A = A.next;
							// 		}
							// 		System.out.println("listOfNodes");
							// 		System.out.println(listOfNodes);
							// 		int mid = (int)Math.floor(listOfNodes.size() / 2);
							// 		System.out.print("node ");
							// 		System.out.println(listOfNodes.get(mid));
							// 		TreeNode root = new TreeNode(listOfNodes.get(mid));
							// 		arrayToBST(root, listOfNodes, 0, mid, listOfNodes.size() - 1, 0);
							// 		return root;
							// 	}
							//
							// 	public static void arrayToBST(TreeNode root, ArrayList<Integer> listOfNodes, int left, int mid, int right, int counter){
								// 		System.out.println("=============");
								// 		System.out.println("Start");
								// 		if (counter == 20) {
									// 			return;
									// 		}
									// 		System.out.print("left ");
									// 		System.out.println(left);
									// 		System.out.print("mid ");
									// 		System.out.println(mid);
									// 		System.out.print("right ");
									// 		System.out.println(right);
									// 		System.out.println();
									// 		counter++;
									// 		if ((mid > left) && (mid - left > 0)) {
										// 			System.out.println("left++ ");
										// 			int index = (mid - left) / 2 + left;
										// 			System.out.print("index ");
										// 			System.out.println(index);
										// 			System.out.print("counter ");
										// 			System.out.println(counter);
										// 			System.out.print("node ");
										// 			System.out.println(listOfNodes.get(index));
										// 			TreeNode leftNode = new TreeNode(listOfNodes.get(index));
										// 			root.left = leftNode;
										// 			arrayToBST(leftNode, listOfNodes, left, index, mid - 1, counter);
										// 		}
										//
										// 		if ((right > mid) && (right - mid > 0)) {
											// 			System.out.println("right++ ");
											// 			int rightMid = right - mid;
											// 			int index = rightMid / 2 + ((rightMid % 2 == 0) ? 0 : 1) + mid;
											// 			System.out.print("counter ");
											// 			System.out.println(counter);
											// 			System.out.print("index ");
											// 			System.out.println(index);
											// 			System.out.print("node ");
											// 			System.out.println(listOfNodes.get(index));
											// 			// int index = (int)Math.round((mid + right) / 2);
											// 			TreeNode rightNode = new TreeNode(listOfNodes.get(index));
											// 			root.right = rightNode;
											// 			arrayToBST(rightNode, listOfNodes, mid + 1, index, right, counter);
											// 		}
											// 		System.out.println("End");
											// 	}
											// }
											// //
											// //  0  1  2  3
											// // [1, 2, 3, 4]
											// // =============
											// // left 0
											// // right 3
											// // mid 2
											// // =============
