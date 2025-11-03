const tinhTongUocChan = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
  }
  console.log(sum);
};

tinhTongUocChan(4);
