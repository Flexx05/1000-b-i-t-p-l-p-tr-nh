const demUocChan = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      if (i % 2 === 0) {
        count++;
      }
    }
  }
  console.log(count);
};

demUocChan(4);
