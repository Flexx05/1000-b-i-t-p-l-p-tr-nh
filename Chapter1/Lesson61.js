const checkChuSoGiamDan = (n) => {
  const nums = String(n).split("");
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] <= nums[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(checkChuSoGiamDan(9876254321));
