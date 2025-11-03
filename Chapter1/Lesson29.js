const timUocLeLonNhat = (n) => {
  const uocArr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      if (i % 2 !== 0) {
        uocArr.push(i);
      }
    }
  }
  return uocArr.reduce((max, uoc) => (max > uoc ? max : uoc), uocArr[0]);
};

console.log(timUocLeLonNhat(100));
