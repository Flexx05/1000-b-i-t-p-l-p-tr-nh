const tinhTong = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const tinhtoan = (n) => {
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum += 1 / tinhTong(i);
  }
  console.log(sum);
};

tinhtoan(2);
