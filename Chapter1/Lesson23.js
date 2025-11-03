const demUoc = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  console.log(count);
};

demUoc(4);
