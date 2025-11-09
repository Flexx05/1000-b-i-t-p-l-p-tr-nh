const tinhtoan = (n) => {
  const nums = String(n).split("");
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum += +nums[i];
    }
  }
  return sum;
};

console.log(tinhtoan(12345));
