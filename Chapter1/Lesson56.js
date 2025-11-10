const checkSoToanLe = (n) => {
  const nums = String(n).split("");
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      return false;
    }
  }
  return true;
};

console.log(checkSoToanLe(13579211));
