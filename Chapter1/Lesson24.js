const uocLe = (n) => {
  const uocLe = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      if (i % 2 !== 0) {
        uocLe.push(i);
      }
    }
  }
  console.log(uocLe);
};

uocLe(4);
