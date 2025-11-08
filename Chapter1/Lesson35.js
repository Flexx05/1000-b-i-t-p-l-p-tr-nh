const tinhtoan = (n) => {
  let res = Math.sqrt(n);
  for (let i = n - 1; i > 0; i--) {
    res = Math.sqrt(i + res);
  }
  return res;
};

console.log(tinhtoan(2));
