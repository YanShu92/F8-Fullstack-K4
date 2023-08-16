
// # Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
console.log("Bài 1:");
var array = [3, 4, 1, 9, 5, 4, 6, 9, 2, 1, 9];
var checkInterger = function(arr) {
    var checkArr = arr.map((value) => Number.isInteger(value)) ;
    var cloneArr = arr.slice(0).fill(true);
    return (JSON.stringify(checkArr) === JSON.stringify(cloneArr)) ? true : false;
}
if (!Array.isArray(array) || !checkInterger(array) || !array.length) {
    console.log("Nhập lại mảng nguyên");
} else {
    var newArr = array.slice(0).sort((a,b) => a - b);
    var min = newArr[0], max = newArr.slice(-1).at(0);
    var indexMin = [], indexMax = [];
    array.forEach(function (value, index){
        if (value === min) indexMin.push(index);
        if (value === max) indexMax.push(index);
    });
    console.log(`Giá trị nhỏ nhất: ${min} tại các vị trí ${indexMin}`);
    console.log(`Giá trị lớn nhất: ${max} tại các vị trí ${indexMax}`);
};

// # Bài 02
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”

console.log("Bài 2:");
var array = [1, 3, 6, 8, 10, 2, 11, 19, 25, 23, -1, 13];
var isPrime = function(number) {
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

var checkInterger = function(arr) {
    var checkArr = arr.map((value) => Number.isInteger(value)) ;
    var cloneArr = arr.slice(0).fill(true);
    return (JSON.stringify(checkArr) === JSON.stringify(cloneArr)) ? true : false;
}

if (!Array.isArray(array) || !checkInterger(array) || !array.length) {
    console.log("Nhập lại mảng nguyên");
} else {
    var primeNumber = [];
    array.forEach(function(value) {
        if (isPrime(value)) primeNumber.push(value);
    });
    if (primeNumber.length) {
        var sum = primeNumber.reduce((a,b) => a + b);    
        console.log(`Số nguyên tố trong mảng là: ${primeNumber}`);
        console.log(`Trung bình các số nguyên tố trong mảng là: ${sum / primeNumber.length}`);

    } else {
        console.log(`Không có số nguyên tố`);
    }
}

// # Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
console.log("Bài 3:");
var arr = ["Hoang", "Thanh", "Hoang", "Van", "Nguyen", "Thanh", 4, 3, 2, 5, 5, 3];
// var newarr = [...(new Set(arr))];  // method 1
arr.sort();   // method 2
console.log(arr);
var newArr = [];
arr.forEach(function (value) {
    if (value !== newArr[newArr.length - 1]) newArr[newArr.length] = value;
});
console.log(newArr);

// # Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
// Sắp xếp mảng theo thứ tự tăng dần
// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
console.log("Bài 4:");
var checkInterger = function(arr) {
    var checkArr = arr.map((value) => Number.isInteger(value)) ;
    var cloneArr = arr.slice(0).fill(true);
    return (JSON.stringify(checkArr) === JSON.stringify(cloneArr)) ? true : false;
}

var list = [5, 1, 4, 12, 9, 8, 10];
if (!Array.isArray(list) || !checkInterger(list) || !list.length) {
    console.log("Nhập lại mảng nguyên");
} else {
    var element = 7;
    if (Number.isInteger(element)) {
        list.sort((a,b) => a - b);
        for (let i = 0; i < list.length; i++) {
            if (list[i] > element) {
                list.splice(i, 0, element);
                break;
            }
        }
        console.log(list);
    } else {
        console.log(`Nhập lại số nguyên chèn thêm`);
    }
};
