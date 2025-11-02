const tinhGiaiThua = (n) => {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

const tinhtoan = (x, n) => {
  let sum = x;
  for (let i = 2; i <= n; i++) {
    sum += x ** i / tinhGiaiThua(i);
  }
  console.log(sum);
};

tinhtoan(1, 2);
