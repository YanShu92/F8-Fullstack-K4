// # Bài 1
// Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter
// Yêu cầu chi tiết:
// Hàm return về giá trị
// Ép ràng buộc kiểu dữ liệu là số
// Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi

var sum = function(...args) {
    var result = 0;
    for (let i = 0; i < args.length; i++) {
        if (!isNaN(parseFloat(args[i]))) {
            result += parseFloat(args[i]);
        } else {
            return "Error! Nhập lại dữ liệu dạng số"
        };
    }
    return result;
}

console.log(sum(1, 2, "3", 7, "10"));

// # Bài 3
// Chuyển đổi mảng 1 chiều thành dạng lồng (nested)
var listArr = [
    {
      id: 1,
      name: "Chuyên mục 1",
      parent: 0,
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      parent: 0,
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      parent: 0,
    },
    {
      id: 4,
      name: "Chuyên mục 2.1",
      parent: 2,
    },
    {
      id: 5,
      name: "Chuyên mục 2.2",
      parent: 2,
    },
    {
      id: 6,
      name: "Chuyên mục 2.3",
      parent: 2,
    },
    {
      id: 7,
      name: "Chuyên mục 3.1",
      parent: 3,
    },
    {
      id: 8,
      name: "Chuyên mục 3.2",
      parent: 3,
    },
    {
      id: 9,
      name: "Chuyên mục 3.3",
      parent: 3,
    },
    {
      id: 10,
      name: "Chuyên mục 2.2.1",
      parent: 5,
    },
    {
      id: 11,
      name: "Chuyên mục 2.2.2",
      parent: 5,
    },
  ];

var nestedArr = function(arr) {
    var map = {}, element, result = [];
    for (var i = 0; i < arr.length; i++) {
        map[arr[i].id] = i;
        arr[i].children = [];
    };
    
    for (var i = 0; i < arr.length; i++) {
        element = arr[i];
        if (element.parent !== 0) {
            arr[map[element.parent]].children.push(element);
        } else {
            result.push(element);
        }
    };

    var deleteParent = function(item) {
        delete item.parent;
        if (item.children.length) {
            for (var j = 0; j < item.children.length; j++) {
                deleteParent(item.children[j]);
            }
        } else {
            delete item.children;
        }
    };
    for (var i = 0; i < result.length; i++) {
        deleteParent(result[i]);
    }
    
    return result;
}
console.log(nestedArr(listArr));

// # Bài 4
// Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript
// Lưu ý: Đặt tên là reduce2()

Array.prototype.reduce2 = function(cb, result) {
    var i = 0;
    if (arguments.length < 2) {
        result = this[0];
        i = 1;
    };
    for (i; i < this.length; i++) {
        result = cb(result, this[i], i, this);
    };
    return result;
};

var arr = [1, 3, 6, 7, 2, 6];
var sum = arr.reduce2(function(accum, current) {
    return accum + current;
}, 5);
console.log(sum);