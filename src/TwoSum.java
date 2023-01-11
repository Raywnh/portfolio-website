class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hashMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {

            if (hashMap.containsKey(nums[i])) {
                int[] arr = new int[2];
                arr[1] = i;
                arr[0] = hashMap.get((nums[i]));
                return arr;
            }
            hashMap.put(target - nums[i], i);
        }

        return new int[0];
    }
}