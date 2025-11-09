const tinhtoan = (n) => {
  const nums = String(n).split("");
  return nums.reduce((pro, num) => pro * Number(num), 1);
};

console.log(tinhtoan(12345));
