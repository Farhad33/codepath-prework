def levelOrder(a)
	return [] if a.nil?
	levels = []
	queue = []
	queue << a
	while !queue.empty? do
		size = queue.size
		i = 0
		level = []
		while i < size do
			node = queue.delete_at(0)
			level << node.data
			queue << node.left if node.left
			queue << node.right if node.right
			i += 1
		end
		levels << level
	end
	return levels
end
