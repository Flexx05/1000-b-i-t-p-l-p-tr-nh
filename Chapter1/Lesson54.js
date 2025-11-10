const soLuongChuSoNhoNhat = (n) => {
  let count = 0;
  const nums = String(n).split("");
  const min = Math.min(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (+nums[i] === min) {
      count++;
    }
  }
  return count;
};

console.log(soLuongChuSoNhoNhat(7361873681));
