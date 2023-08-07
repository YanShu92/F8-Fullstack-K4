
// # Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

var array = [3, 4, 1, 9, 5, 4, 6, 9, 2, 1];
var n = array.length;
var min = Math.min(...array), max = Math.max(...array);
var indexmin = array.reduce(function(accum, current, index) {
    if (current === min) {
        accum.push(index);
    }
    return accum;
}, []);
var indexmax = array.reduce(function(accum, current, index) {
    if (current === max) {
        accum.push(index);
    }
    return accum;
}, []);
console.log(`Giá trị nhỏ nhất: ${min} tại các vị trí ${indexmin}`);
console.log(`Giá trị lớn nhất: ${max} tại các vị trí ${indexmax}`);

// # Bài 02
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”

var arr = [1, 3, 6, 8, 10, 2, 11, 19, 25, 23];
// var arr = [ 12, 4 , 8, 10];
function isPrime(number) {
    var flag = true;
    if (number < 2) {
        flag = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
};
var primeNumber = arr.filter((a, b) =>  isPrime(a));
if (Array.isArray(primeNumber) && primeNumber.length) {

    var sum = primeNumber.reduce((a,b) => a + b);    
    console.log(`Số nguyên tố trong mảng là: ${primeNumber}`);
    console.log(`Trung bình các số nguyên tố trong mảng là: ${sum / primeNumber.length}`);

} else {
    console.log(`Không có số nguyên tố`);
}

// # Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý

var arr = ["Hoang", "Thanh", "Hoang", "Van", "Nguyen", "Thanh"];
var newarr = [...(new Set(arr))];
console.log(newarr);

// # Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
// Sắp xếp mảng theo thứ tự tăng dần
// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng

var list = [5, 1, 4, 12, 9, 8, 10];
var element = 11;
if (Array.isArray(primeNumber) && primeNumber.length) {
    list.sort((a,b) => a - b);
    var c = list.find((a,b) => a >= element); // find nearest greater number
    var indexElement = c === undefined ? list.length : list.indexOf(c); // find index element
    list.splice(indexElement, 0, element);
    console.log(list);
} else {
    console.log(`Mảng rỗng || Không là mảng`);
}

// can arr.push(element) -> sort() again!!!
