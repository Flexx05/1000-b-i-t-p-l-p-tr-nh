const phuongTrinhBac2 = (a, b, c) => {
  let delta = b * b - 4 * a * c;
  if (a === 0) {
    if (b !== 0) {
      return -c / b;
    }
    if (c !== 0) return "Vô nghiệm";
    return "Vô số nghiệm";
  }

  if (delta > 0) {
    return {
      x1: (-b + Math.sqrt(delta)) / (2 * a),
      x2: (-b - Math.sqrt(delta)) / (2 * a),
    };
  } else if (delta === 0) {
    return { x: -b / (2 * a) };
  } else {
    return "Vô nghiệm";
  }
};

console.log(phuongTrinhBac2(1, -5, 6));
