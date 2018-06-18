function permutation(nums) {
	var list = []
	if(nums !== null && nums.length > 0) {
		helper(nums, 0, list);
	}
	return list;
}

function helper(nums, i, list) {
	if (i === nums.length - 1) {
		list.push(nums.slice())
	} else {
		for (let j = i; j < nums.length; j++) {
			nums[j] = [nums[i], nums[i] = nums[j]][0];
			helper(nums, i + 1, list);
			nums[j] = [nums[i], nums[i] = nums[j]][0];
		}
	}
}
x = 2
y = 3

x = x + y
y = x - y
x = x - y



def permutations(array):

  if len(array) == 1:
    return [array]

  result = []
  current_num = array[0]
  rest_permutations = permutations(array[1:])  #  cur = 1 , [2,3,4] cur = 2 [3,4]
  for per in rest_permutations:
    for idx in range(len(per)+1):
      temp = per[:]
      temp.insert(idx, current_num)
      result.append(temp)

  return result


x = permutations([1,2,3,4, 5])
print len(x)
print x






public ArrayList<ArrayList<Integer> getPermustations(ArrayList<Integer> input){

   ArrayList<ArrayList<Integer> output = new ArrayList<ArrayLiast<Integer>();
   permutation(input, new ArrayList<Integer>(), output, new boolean[input.size()]);

   return output;

}

private void permutation(ArrayList<Integer> inputList, ArrayList<Integer> tempList,
                  ArrayList<Arraylist<Integer> outputList, boolean[] checkList){

              if(tempList.size()==inputList.size()){
                outputList.add(new ArrayList(tempList));
                return;
              }


              for(int i =0; i<inputList.size();i++){
                  //????????????????
                  if(checkList[i]==false){
                     tempList.add(inputList.get(i)); //1
                     checkList[i]=true; // true, false, false
                     permutation(inputList,tempList, outputList, checkList);
                     checkList[i]=false;
                     tempList.remove(tempList.size()-1);
                  }

              }


    }
