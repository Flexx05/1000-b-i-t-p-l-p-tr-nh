const soLuongChuSoLonNhat = (n) => {
  let count = 0;
  const nums = String(n).split("");
  const max = Math.max(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (+nums[i] === max) {
      count++;
    }
  }
  return count;
};

console.log(soLuongChuSoLonNhat(7361873681));
