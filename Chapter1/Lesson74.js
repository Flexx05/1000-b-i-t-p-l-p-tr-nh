const tinhGiaiThua = (n) => {
  if (n === 1 || n === 0) return 1;
  return n * tinhGiaiThua(n - 1);
};

const tinhtoan = (x, n) => {
  if (n === 0) return -x;
  return (
    (-1) ** (n + 1) * (x ** (2 * n + 1) / tinhGiaiThua(2 * n + 1)) +
    tinhtoan(x, n - 1)
  );
};

console.log(tinhtoan(2, 2));
