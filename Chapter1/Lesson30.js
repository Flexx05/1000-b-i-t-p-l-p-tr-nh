const checkPerfectNum = (n) => {
  const uocArr = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      uocArr.push(i);
    }
  }
  return uocArr.reduce((sum, uoc) => sum + uoc, 0) === n;
};

console.log(checkPerfectNum(6));
