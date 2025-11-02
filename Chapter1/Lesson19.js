const tinhGiaiThua = (n) => {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

const tinhtoan = (x, n) => {
  let sum = 1 + x;
  for (let i = 1; i <= n; i++) {
    sum += x ** (2 * i + 1) / tinhGiaiThua(2 * i + 1);
  }
  console.log(sum);
};

tinhtoan(1, 1);
