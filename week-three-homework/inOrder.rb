def inorderTraversal(a)
	current = a
	stack = []
	result = []

	while true do
		if !current.nil?
			stack.push(current)
			current = current.left
		else
			if stack.empty?
				break
			else
				current = stack.pop
				result.push(current.data)
				current = current.right
			end
		end
	end
	result
end
