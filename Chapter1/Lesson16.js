const tinhTong = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const tinhtoan = (x, n) => {
  let sum = x;
  for (let i = 2; i <= n; i++) {
    sum += x ** i / tinhTong(i);
  }
  console.log(sum);
};

tinhtoan(1, 2);
