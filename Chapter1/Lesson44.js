const tinhtoan = (n) => {
  const nums = String(n).split("");
  return nums.reduce((sum, num) => sum + Number(num), 0);
};

console.log(tinhtoan(12345));
