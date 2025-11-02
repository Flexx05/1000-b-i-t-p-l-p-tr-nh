const timUoc = (n) => {
  const uoc = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      uoc.push(i);
    }
  }
  console.log(uoc);
};

timUoc(4);
