const tinhtoan = (a, b) => {
  if (a === 0 && b !== 0) return "Vô nghiệm";
  if (a === 0 && b === 0) return "Vô số nghiệm";
  return -b / a;
};

console.log(tinhtoan(2, 0));
