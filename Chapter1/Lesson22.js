const tinhTichUoc = (n) => {
  let pro = 1;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      pro *= i;
    }
  }
  console.log(pro);
};

tinhTichUoc(4);
