const tinhtoan = (x, n) => {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    res += x ** (2 * i + 1);
  }
  console.log(res);
};

tinhtoan(2, 1);
