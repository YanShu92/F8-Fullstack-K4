// Bài 1: Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
var distance = 130;
var pricePerKm,
  discount = 10,
  total;
if (typeof distance === "number" && !Number.isNaN(distance) && distance > 0) {
  if (distance <= 1) {
    pricePerKm = 15000;
    total = distance * pricePerKm;
  } else if (distance <= 5) {
    pricePerKm = 13500;
    total = 15000 + (distance - 1) * pricePerKm;
  } else {
    pricePerKm = 11000;
    total = 15000 + 13500 * 4 + (distance - 5) * pricePerKm;
    if (distance > 120) {
      total = (total * (100 - discount)) / 100;
    }
  }
  console.log(`Số tiền ứng ${distance}km là ${total} vnd`);
} else {
  console.log(`Nhap lai khoang cach dạng số và > 0`);
}

// # Bài 2: Tính tiền điện
// Input: Số điện tiêu thụ hàng tháng
// Output: Hiển thị số tiền phải đóng
// Chi tiết giá điện theo bậc

var amountOfComsumption = 300,
  sum = 0;
let pricePerKwh = [2927, 2834, 2536, 2014, 1734, 1678],
  threshold = [400, 300, 200, 100, 50, 0];

if (Number.isInteger(amountOfComsumption) && amountOfComsumption > 0) {
  var temp = amountOfComsumption;
  for (var i in pricePerKwh) {
    if (temp > threshold[i]) {
      sum += (temp - threshold[i]) * pricePerKwh[i];
      temp = threshold[i];
    }
  }
  console.log(
    `Số tiền điện phải trả cho ${amountOfComsumption}kWh là ${sum} vnd`
  );
} else {
  console.log(`Nhap lai số kwh là số nguyên dương`);
}

// # Bài 3: Tính giá trị biểu thức
// Cho trước số nguyên n. Tính giá trị biểu thức sau
// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

var n = 5,
  s = 0;

if (Number.isInteger(n) && n > 0) {
  for (var j = 1; j <= n; j++) {
    s += j * (j + 1);
  }
  console.log(`Tổng S là: ${s}`);
} else {
  console.log(`Nhập lại n nguyên dương`);
}

// # Bài 4: Viết hàm kiểm tra số nguyên tố
// Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?
// Hàm có 1 tham số là số cần kiểm tra
// Hàm có giá trị trả về
// Gọi hàm trong câu điều kiện if else

function isPrimeNumber(number) {
  var key = true;
  if (number < 2) {
    key = false;
  } else if (number == 2) {
    key = true;
  } else {
    const sqrtN = Math.ceil(Math.sqrt(number));
    for (let m = 2; m <= sqrtN; m++) {
      if (number % m === 0) {
        return false;
        break;
      }
    }
  }
  return key;
}
var n = 99;
if (Number.isInteger(n) && n > 0) {
  if (isPrimeNumber(n)) {
    console.log(`${n} là số nguyên tố`);
  } else {
    console.log(`${n} không là số nguyên tố`);
  }
} else {
  console.log(`Nhap lai n là số nguyên dương`);
}

// # Bài 5: Vẽ tam giác số
// Vẽ tam giác số sau với N dòng
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function triangle(number) {
  var count = 1;
  for (let k1 = 1; k1 <= number; k1++) {
    var output = "";
    for (let k2 = 1; k2 <= k1; k2++) {
      output += count + " ";
      count++;
    }
    console.log(output);
  }
}
triangle(5);

// # Bài 6: Vẽ bàn cờ vua
// Học viên sử dụng kiến thức đã học về vòng lặp, câu lệnh rẽ nhánh để vẽ bàn cờ vua
var n = 8;
var row = n,
  column = n;
var tagTable = document.createElement("table");
    tagTable.setAttribute('class', 'table-style');

for (var i = 0; i < row; i++) {
  var tagRow = document.createElement("tr");
  for (var j = 0; j < row; j++) {
    var tagColumn = document.createElement("td");
    if ((i + j) % 2 !== 0) {
        tagColumn.setAttribute('class', 'cell white');
        tagRow.appendChild(tagColumn);  
    } else {
        tagColumn.setAttribute('class', 'cell black');
        tagRow.appendChild(tagColumn);
    }
  }
  tagTable.appendChild(tagRow); 
}

document.getElementById("chess").appendChild(tagTable);

// # Bài 7: Vẽ bảng cửu chương
// Học viên sử dụng kiến thức đã học để vẽ bảng cửu chương từ 1 đến 10

var n = 9;
var row = n,
  column = n;
var tagTable = document.createElement("table");
    tagTable.setAttribute('class', 'table-style');

for (var i = 1; i <= row + 1; i++) {
  var tagRow = document.createElement("tr");
  for (var j = 1; j <= row; j++) {
    var tagColumn = document.createElement("td");
    var textNOde = document.createTextNode(`${j} x ${i} = ${i * j}`)
    tagColumn.setAttribute('class', 'cel-multiplication');
    tagColumn.appendChild(textNOde);  
    tagRow.appendChild(tagColumn);  
  }
  tagTable.appendChild(tagRow); 
}

document.getElementById("multiplication-table").appendChild(tagTable);

// # Bài 8: Tính giá trị biểu thức không dùng vòng lặp
// Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N

function calculate(number) {
  if (number > 0) {
    return 1 / number + calculate(number - 1);
  }
  return 0;
}
var n = 4;
if (Number.isInteger(n) && n > 0) {
  console.log(`Giá trị biểu thức S với n = ${n} là ${calculate(n)}`);
} else {
  console.log(`Nhap lai n là số nguyên dương`);
}
