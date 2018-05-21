class Solution
    # @param a : constant array of integers
    # @param b : integer
    # @return an integer
    def kthsmallest(a, b)
      arr2 = a.dup
      arr2.sort!
      return arr2[b - 1]
    end
end
