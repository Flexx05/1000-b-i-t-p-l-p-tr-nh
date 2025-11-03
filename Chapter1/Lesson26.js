const tinhTichUocLe = (n) => {
  let pro = 1;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      if (i % 2 !== 0) {
        pro *= i;
      }
    }
  }
  console.log(pro);
};

tinhTichUocLe(9);
