const tinhtoan = (x, n) => {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += x ** i;
  }
  console.log(res);
};

tinhtoan(2, 2);
