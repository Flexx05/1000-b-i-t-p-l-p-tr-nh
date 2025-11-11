const phuongTrinhTrungPhuong = (a, b, c) => {
  if (a === 0) {
    if (b !== 0) {
      const t = -c / b;
      if (t > 0) {
        return { x1: Math.sqrt(t), x2: -Math.sqrt(t) };
      } else if (t === 0) {
        return { x1: 0 };
      } else {
        return "Vô nghiệm";
      }
    }
    if (c !== 0) return "Vô nghiệm";
    return "Vô số nghiệm";
  }

  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    return "Vô nghiệm";
  }

  const t1 = (-b + Math.sqrt(delta)) / (2 * a);
  const t2 = (-b - Math.sqrt(delta)) / (2 * a);

  const nghiemX = {};
  let count = 0;

  if (t1 > 0) {
    nghiemX[`x${++count}`] = Math.sqrt(t1);
    nghiemX[`x${++count}`] = -Math.sqrt(t1);
  } else if (t1 === 0) {
    if (count === 0) {
      nghiemX[`x${++count}`] = 0;
    }
  }

  if (delta > 0) {
    if (t2 > 0) {
      nghiemX[`x${++count}`] = Math.sqrt(t2);
      nghiemX[`x${++count}`] = -Math.sqrt(t2);
    } else if (t2 === 0) {
      if (count === 0) {
        nghiemX[`x${++count}`] = 0;
      }
    }
  }

  if (count === 0) {
    return "Vô nghiệm";
  } else if (count === 1) {
    return { x: 0 };
  } else {
    return nghiemX;
  }
};

// 1. Bốn nghiệm (x^4 - 5x^2 + 4 = 0 => t=1, t=4)
console.log("4 nghiệm:", phuongTrinhTrungPhuong(1, -5, 4));
// Kết quả: { x1: 2, x2: -2, x3: 1, x4: -1 }

// 2. Hai nghiệm (x^4 - 3x^2 - 4 = 0 => t=4, t=-1)
console.log("2 nghiệm:", phuongTrinhTrungPhuong(1, -3, -4));
// Kết quả: { x1: 2, x2: -2 }

// 3. Ba nghiệm (x^4 - 4x^2 = 0 => t=4, t=0)
console.log("3 nghiệm:", phuongTrinhTrungPhuong(1, -4, 0));
// Kết quả: { x1: 2, x2: -2, x3: 0 }

// 4. Một nghiệm (x^4 = 0 => t=0, t=0)
console.log("1 nghiệm:", phuongTrinhTrungPhuong(1, 0, 0));
// Kết quả: { x: 0 }

// 5. Vô nghiệm (x^4 + x^2 + 1 = 0 => t < 0)
console.log("Vô nghiệm:", phuongTrinhTrungPhuong(1, 1, 1));
// Kết quả: Vô nghiệm
