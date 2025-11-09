const tinhtoan = (n) => {
  const nums = String(n).split("");

  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      res *= nums[i];
    }
  }
  return res;
};

console.log(tinhtoan(12345));
