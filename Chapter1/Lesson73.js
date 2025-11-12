const tinhGiaiThua = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * tinhGiaiThua(n - 1);
};

const tinhtoan = (x, n) => {
  if (n === 0) return -1;
  return (
    (-1) ** (n + 1) * (x ** (2 * n) / tinhGiaiThua(2 * n)) + tinhtoan(x, n - 1)
  );
};

console.log(tinhtoan(3, 2));
