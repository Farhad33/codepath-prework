def maxDepth(a)
	return 0 unless a
	right = maxDepth(a.right)
	left = maxDepth(a.left)
	[right, left].max + 1
end
