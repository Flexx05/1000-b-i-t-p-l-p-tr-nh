const tinhtoan = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  for (let i = 1; i < n; i++) {
    if ((i * (i + 1)) / 2 >= n) {
      return i - 1;
    }
  }
};

console.log(tinhtoan(3));
