def lengthOfLastWord(a)
	a.strip!
	return a.length < 1 ? 0 : a.split(' ')[-1].length
end
