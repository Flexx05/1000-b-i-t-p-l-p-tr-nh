const UCLN = (a, b) => {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const BCNN = (a, b) => {
  return (a * b) / UCLN(a, b);
};

console.log(BCNN(24, 54));
