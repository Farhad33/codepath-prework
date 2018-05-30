def anagrams(input)
	hash = Hash.new { |h, k| h[k] = [] }

	input.each.with_index(1) do |j, idx|
		j = j.split('').sort
		hash[j] = [] if !hash[j]
		hash[j] << idx if hash.key?(j)
	end

	hash.values.to_a
end
