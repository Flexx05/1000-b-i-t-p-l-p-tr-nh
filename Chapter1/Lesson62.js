const uocChungLonNhat = (a, b) => {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

console.log(uocChungLonNhat(24, 54));
