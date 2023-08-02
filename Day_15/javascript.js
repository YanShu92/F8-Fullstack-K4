// Bai 1: Hoán vị hai số
// Input: Cho trước 2 số a, b
// Output: Thực hiện hoán vị 2 số không dùng biến trung gian
console.log(`Bài 1:`);
var a = 2, b = 3;
document.getElementById('input_ex1').innerText = `Cho: a = ${a}; b = ${b} \n`;
console.log(`Cho: a = ${a}; b = ${b}`);
a = a + b; // 5
b = a - b; // 2
a = a - b; // 3
console.log(`Sau hoán vị: a = ${a}; b = ${b}`);
document.getElementById('output_ex1').innerText = `Sau hoán vị: a = ${a}; b = ${b}`;
document.getElementById('code_ex1').innerText = `
var a = 2, b = 3;
a = a + b; // 5
b = a - b; // 2
a = a - b; // 3
`;

// Bài 2: Thực hiện phép toán
// Viết chương trình tính toán biểu thức sau: S = 10 + 20 + 5^10 / 2
console.log(`Bài 2:`);
var s = 10 + 20 + 5 ** 10 /2;
console.log(`Tính toán: s = ${s}`);
document.getElementById('output_ex2').innerText = `Tính toán: s = ${s}`;
document.getElementById('code_ex2').innerText = `
var s = 10 + 20 + 5 ** 10 /2;
console.log(\`Tính toán: s = ${s}\`);
`;

// Bài 3: Tìm số lớn nhất
// Input: Cho trước 3 số a, b, c
// Output: Tìm số lớn nhất trong 3 số và hiển thị kết quả

console.log(`Bài 3:`);
var a = 2, b = 5, c = 4, max;
document.getElementById('input_ex3').innerText = `Cho: a = ${a}; b = ${b}; c = ${c} \n`;
max = a > b ? a : b;
max =  max < c ? c : max;
console.log(max);
document.getElementById('output_ex3').innerText = `Số lớn nhất là: max = ${max}`;
document.getElementById('code_ex3').innerText = `
var a = 2, b = 5, c = 4, max;
max = a > b ? a : b;
max =  max < c ? c : max;
console.log(max);
`;
// Bài 4: Kiểm tra số cùng dấu
// Input: Cho trước 2 số a, b
// Output: Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình

console.log(`Bài 4:`);
var a = 2, b = -1;
var c = a * b, d;
if (c > 0) {
    d = "cùng dấu";
} else if (c < 0) {
    d = "trái dấu";
} else {
    d = "Không xác định cùng/trái dấu";
}
console.log(`a = ${a}; b = ${b} ${d} `);
document.getElementById('input_ex4').innerText = `Cho: a = ${a}; b = ${b}; `;
document.getElementById('output_ex4').innerText = `a = ${a}; b = ${b} ${d} `;
document.getElementById('code_ex4').innerText = `
var a = 2, b = -1;
var c = a*b, d;
if (c > 0) {
    d = "cùng dấu";
} else if (c < 0) {
    d = "trái dấu";
} else {
    d = "Không xác định cùng/trái dấu";
}
console.log(\`a = ${a}; b = ${b} ${d} \`);
`;


// Bài 5: Sắp xếp 3 số
// Input: Cho trước 3 số a, b, c
// Output: Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần

console.log(`Bài 5:`);
var a =  7, b = 3, c = 4;
console.log(`Cho: a = ${a}; b = ${b}; c = ${c}`);
document.getElementById('input_ex5').innerText = `Cho: a = ${a}; b = ${b}; c = ${c}`;
function foaming(i,j) {
    var max;
    if (i > j) {
        max = i;
        i = j;
        j = max;
    }
    return [i,j];
}
[a,b] = foaming(a, b);
[b,c] = foaming(b, c);
[a,b] = foaming(a, b);
console.log(`Tăng dần: ${a}; ${b}; ${c}`);

document.getElementById('output_ex5').innerText = `Tăng dần: ${a}; ${b}; ${c}`;
document.getElementById('code_ex5').innerText = `
var a =  7, b = 3, c = 4;
function foaming(i,j) {
    var max;
    if (i > j) {
        max = i;
        i = j;
        j = max;
    }
    return [i,j];
}
[a,b] = foaming(a, b);
[b,c] = foaming(b, c);
[a,b] = foaming(a, b);
console.log(\`Tăng dần: ${a}; ${b}; ${c}\`);
`;

