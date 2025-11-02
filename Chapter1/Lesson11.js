const tinhGiaiThua = (n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

const tinhtoan = (n) => {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += tinhGiaiThua(i);
  }
  console.log(res);
};

tinhtoan(3);
