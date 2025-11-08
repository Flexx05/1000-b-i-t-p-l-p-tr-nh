const checkSoChinhPhuong = (n) => {
  let a = Math.sqrt(n);
  return a === Math.round(a);
};

console.log(checkSoChinhPhuong(3));
