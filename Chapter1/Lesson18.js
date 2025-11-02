const tinhGiaiThua = (n) => {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

const tinhtoan = (x, n) => {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum += x ** (2 * i) / tinhGiaiThua(2 * i);
  }
  console.log(sum);
};

tinhtoan(2, 1);
