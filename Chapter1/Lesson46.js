const tinhtoan = (n) => {
  const nums = String(n).split("");

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      res.push(nums[i]);
    }
  }
  return res;
};

console.log(tinhtoan(12345));
