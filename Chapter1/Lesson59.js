const checkSoDoiXung = (n) => {
  const nums = String(n).split("");
  return nums.join("") === nums.reverse().join("");
};

console.log(checkSoDoiXung(123221));
