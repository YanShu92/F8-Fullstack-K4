// # Bài 1: N số fibonaci
// Hiển thị N số Fibonaci đầu tiên
// Yêu cầu: Không dùng vòng lặp


var fibonaci = function (n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibonaci(n - 1) + fibonaci(n - 2);
};

var listFibonaci = function(number) {
    if (number > 1) {
        return  fibonaci(number) + " "+ listFibonaci(number - 1);   
    }
    return 1;
}

var n = 15;
if (Number.isInteger(n) && n > 0) {
    console.log(`${n} số fibonaci đầu tiên là: ${listFibonaci(n)}`);
} else {
    console.log("Nhập lại N");
}

// # Bài 2: Đảo ngược số
// Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược


var reverse = function(number) {
    if (number === 0) return "";
    var result = "" + (number % 10) + reverse(parseInt(number / 10));
    return result;
}
var n = 12451052;
if (Number.isInteger(n) && n > 0) {
    console.log(`Số ${n} đảo ngược thành: ${reverse(n)}`);
} else {
    console.log("Nhập lại số nguyên dương cần đảo ngược");
}


// # Bài 3: Viết hàm chuyển số thành chữ
// Ví dụ: Số 4298 sẽ chuyển thành: Bốn ngàn hai trăm chín tám
// Ràng buộc: Số cần chuyển đổi có giá trị từ 0 đến 9999

function convert(number) {
    var str = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    var unit = ["ngàn", "trăm", "mươi"];
    var a = parseInt(number / 1000),
    b = parseInt((number - a * 1000) / 100),
    c = parseInt((number - a * 1000 - b * 100) / 10),
    d = number % 10;
    var result = ``;
    if (a !== 0) result += " " + str[a] + " " + unit[0];
    if (b !== 0) result += " " + str[b] + " " + unit[1];
    if (c !== 0) {
        result += " " + str[c] + " " + unit[2];
    } else if (a !== 0 || b !== 0) {
        result += " linh";
    }
    if (d !== 0) result += " " + str[d];
    return result;
}

var n = 5204;
if (Number.isInteger(n) && n > 0 && n < 9999) {
    console.log(`Số ${n} chuyển thành: ${convert(n)}`);
} else {
    console.log("Nhập lại số nguyên dương từ 0 đến 9999");
}