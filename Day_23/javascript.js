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

// # Bài 2
// Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị

// Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

Object.prototype.getCurrency = function (unit) {
    if (Number.isNaN(this) || Number.isNaN(Number(this))) return "Invalid Data!";
    return Number(this).toLocaleString() + ` ${unit}`;
}
var price = 12000;
console.log(price.getCurrency("đ"));
var price = "12000000";
console.log(price.getCurrency("đ"));

// # Bài 3
// Viết lại hàm push() trong Array. Đặt tên là push2()

Array.prototype.push2 = function() {
    if (arguments.length) {
        for (var i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
        }
    }
    return this;
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push2("Kiwi", "Lemon", "Pineapple"));

// # Bài 4
// Viết làm vòng lặp filter trong Array. Đặt tên là filter2()

Array.prototype.filter2 = function(cb, thisArr = this) {
    var output = [];
    for (var i = 0; i < this.length; i++) {
        if (cb(this[i], i, this) === true) output.push(this[i]);
    }
    return output;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter2((word) => word.length > 6);
console.log(result);

// # Bài 5:
// Chuyển mảng sau thành dạng thẻ html select option

var categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      children: [
        {
          id: 4,
          name: "Chuyên mục 2.1",
        },
        {
          id: 5,
          name: "Chuyên mục 2.2",
          children: [
            {
              id: 10,
              name: "Chuyên mục 2.2.1",
            },
            {
              id: 11,
              name: "Chuyên mục 2.2.2",
            },
            {
              id: 12,
              name: "Chuyên mục 2.2.3",
            },
          ],
        },
        {
          id: 6,
          name: "Chuyên mục 2.3",
        },
      ],
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      children: [
        {
          id: 7,
          name: "Chuyên mục 3.1",
        },
        {
          id: 8,
          name: "Chuyên mục 3.2",
        },
        {
          id: 9,
          name: "Chuyên mục 3.3",
        },
      ],
    },
  ];

const selectOutput = document.getElementById("select_section");
var opt = function(arr,prefix = "", prefixValue = "") {
    return arr.map(function(item, index) {
        if ("children" in item) {            
            return `<option value = "${prefixValue}${index + 1}">${prefix}${item.name}</option> 
            ${opt(item.children, prefix + "--|", index + 1 + prefixValue)}`;
        } else {
            return `<option value = "${prefixValue}${index + 1}">${prefix}${item.name}</option>`;
        }
    })
    .join("");
};
var html = `
    <option value="">Chọn Chuyên mục</option>;
    ${opt(categories)}
`;
selectOutput.innerHTML = html;

 
