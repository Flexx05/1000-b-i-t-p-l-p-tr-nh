const checkSoToanChan = (n) => {
  const nums = String(n).split("");
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
};

console.log(checkSoToanChan(2468000));
