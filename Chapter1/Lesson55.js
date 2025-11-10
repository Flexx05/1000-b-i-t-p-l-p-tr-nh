const soLuongChuSoDauTien = (n) => {
  const nums = String(n).split("");
  let count = 0;
  const firstNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === firstNum) {
      count++;
    }
  }
  return count;
};

console.log(soLuongChuSoDauTien(8378132168321));
