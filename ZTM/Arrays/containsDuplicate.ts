function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size < nums.length;
}

/**
 
 const set = new Set<number>()
     for (let num of nums) {
         if(set.has(num)) return true
         set.add(num)
     }
     return false
      
*/
