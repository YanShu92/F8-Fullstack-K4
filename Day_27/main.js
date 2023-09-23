const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var main = $(".main");
var container = $(".container");
var cart = $(".cart");

main.style.width = "80%";
main.style.margin = "30px auto 0";

var h2 = document.createElement("h2");
h2.innerText = "Danh sách sản phẩm";
h2.style.textTransform = "uppercase";
container.append(h2);

var tableItems = document.createElement("table");
tableItems.id = "table-products";
tableItems.style.width = "100%";

var headList = document.createElement("thead");
var tr = document.createElement("tr");
var headName = ["STT", "Tên sản phẩm", "Giá", "Thêm giỏ hàng"];
headName.forEach((name) => {
  var td = document.createElement("td");
  td.innerText = `${name}`;
  tr.append(td);
});

var widthHead = [5, "", 10, 15];
tr.childNodes.forEach((item, index) => {
  item.style.width = `${widthHead[index]}%`;
});
headList.prepend(tr);
tableItems.append(headList);

var products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 2000,
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 3000,
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    price: 4000,
  },
];

var count = products.length;
products.forEach((item, index) => {
  var tableBody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.innerText = `${index + 1}`;
  td.style.textAlign = "center";
  tr.append(td);

  var td = document.createElement("td");
  td.innerText = `${item.name}`;
  td.style.paddingLeft = "20px";
  tr.append(td);

  var td = document.createElement("td");
  td.innerText = `${item.price}`;
  td.style.textAlign = "center";
  tr.append(td);

  var td = document.createElement("td");
  var input = document.createElement("input");
  input.id = `${item.id}`;
  input.style.textAlign = "center";
  input.type = "number";
  input.value = "1";
  input.style.width = "90%";
  input.style.display = "block";
  input.style.margin = "0 auto";
  td.append(input);
  var button = document.createElement("button");
  button.style.width = "100%";
  button.className = "add-cart";
  button.innerText = "Thêm vào giỏ";
  td.append(button);
  tr.append(td);
  tableBody.append(tr);
  button.addEventListener("click", function () {
    if (Number.isInteger(+input.value)) {
      if (input.value <= 0) input.value = 1;
    } else {
      alert("Nhập số lượng dạng số nguyên");
    }
  });
  tableItems.append(tableBody);
});
container.append(tableItems);
// cart
var cart = $(".cart");
cart.style.marginTop = "20px";
var h2 = document.createElement("h2");
h2.innerText = "giỏ hàng";
h2.style.textTransform = "uppercase";
cart.append(h2);
// cart no items
var empty = document.createElement("span");
empty.className = "empty";
empty.innerText = "Giở hàng không có sản phẩm";
empty.style.display = "block";
cart.append(empty);

// table cart
var cartData = document.createElement("div");
cartData.className = "cart-wrap";
cartData.style.display = "none";
var tableCart = document.createElement("table");
tableCart.id = "table-cart";
tableCart.style.width = "100%";

var headList = document.createElement("thead");
var tr = document.createElement("tr");
var headName = ["STT", "Tên sản phẩm", "Giá", "Số lượng", "Thành tiền", "Xóa"];
headName.forEach((name) => {
  var td = document.createElement("td");
  td.innerText = `${name}`;
  tr.append(td);
});
var widthHead = [5, "", 20, 20, 20, 5];
tr.childNodes.forEach((item, index) => {
  item.style.width = `${widthHead[index]}%`;
});
headList.append(tr);
tableCart.append(headList);

var tbodyProduct = $$("table#table-products tbody");
var cartList = [];
tbodyProduct.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        var empty = $(".cart span.empty");
        var cartWrap = $(".cart div.cart-wrap");
        empty.style.display = "none";
        cartWrap.style.display = "block";
      if (!cartList.some((element) => element.id === +e.target.previousElementSibling.id)) {
        var newEl = products.find((ele) => ele.id === +e.target.previousElementSibling.id);
        newEl.quality = +e.target.previousElementSibling.value;
        cartList.push(newEl);
        var tbody = document.createElement("tbody");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerText = `${cartList.length}`;
        tr.append(td);
        var td = document.createElement("td");
        td.innerText = `${newEl.name}`;
        tr.append(td);
        var td = document.createElement("td");
        td.innerText = `${newEl.price}`;
        tr.append(td);
        var td = document.createElement("td");
        var input = document.createElement("input");
        input.type = "number";
        input.value = `${+e.target.previousElementSibling.value}`;
        td.append(input);
        tr.append(td);
        var td = document.createElement("td");
        td.innerText = `${newEl.price * +e.target.previousElementSibling.value}`;
        tr.append(td);
        var td = document.createElement("td");
        var button = document.createElement("button");
        button.innerText = "Xóa";
        button.className = `${+e.target.previousElementSibling.id}`;
        td.append(button);
        tr.append(td);
        tbody.append(tr);
        var tableTotal = $(".cart-total");
        tableCart.insertBefore(tbody, tableTotal);
        button.addEventListener("click", function(e) {
            tableCart.removeChild(tbody);
            cartList.splice(+tbody.children[0].children[0].innerText - 1, 1);
            var cartBody = $$("table#table-cart tbody");
            if (cartBody.length > 1) {
                for (var i = 0; i < cartBody.length - 1; i++) {
                    cartBody[i].children[0].children[0].innerText = `${i+1}`;
                }
            } else {
                handleClear();
            }
            calculator();
        });
        calculator();
      } else {
        var cartBody = $$("table#table-cart tbody");
        cartList.forEach(function(ele, index) {
            if (ele.id === +e.target.previousElementSibling.id) {
                ele.quality += +e.target.previousElementSibling.value;
                cartBody[index].children[0].children[3].children[0].value = ele.quality;
                cartBody[index].children[0].children[4].innerText = ele.quality * ele.price;
            }
        })
        calculator();
    };
    }
  });
});

var calculator = function() {
    var sumRow = $("table#table-cart tbody.cart-total");
    var qualitySum = 0, sum = 0;
    cartList.forEach((item) => {
        qualitySum += +item.quality;
        sum += item.quality * item.price;
    });
    sumRow.children[0].children[1].innerText = `${qualitySum}`;
    sumRow.children[0].children[2].innerText = `${sum}`;
}


// total cart
var tableBody = document.createElement("tbody");
tableBody.className = "cart-total";
var tr = document.createElement("tr");
var td = document.createElement("td");
td.colSpan = "3";
td.innerText = "Tổng";
tr.append(td);
var td = document.createElement("td");
td.id = "quality";
tr.append(td);
var td = document.createElement("td");
td.id = "total";
td.colSpan = "2";
tr.append(td);
tableBody.append(tr);
tableCart.append(tableBody);
cartData.append(tableCart);

var hr = document.createElement("hr");
hr.style.margin = "10px 0";
cartData.append(hr);
var update = document.createElement("button");
update.innerText = "Cập nhật giở hàng";
cartData.append(update);
update.addEventListener("click", function() {
    var cartBody = $$("table#table-cart tbody"); 
    var indexRemove = [];
    for (var i = 0; i < cartBody.length - 1; i++) {
        if (cartBody[i].children[0].children[3].children[0].value <= 0) {
            tableCart.removeChild(cartBody[i]);
            indexRemove.push(i);
        };
    };
    for ( var i = indexRemove.length - 1; i >= 0; i--) {
        cartList.splice(indexRemove[i], 1);
    }

    var cartBody = $$("table#table-cart tbody");
    if (cartBody.length > 1) {
        for (var i = 0; i < cartBody.length - 1; i++) {
            cartList[i].quality = +cartBody[i].children[0].children[3].children[0].value;
            cartBody[i].children[0].children[4].innerText = cartList[i].quality * cartList[i].price;
            cartBody[i].children[0].children[0].innerText = `${i+1}`;
        };    
    } else {
        handleClear();
    };
    calculator();
})

var clear = document.createElement("button");
clear.innerText = "Xóa giở hàng";
var handleClear = function() {
    var empty = $(".cart span.empty");
    var cartWrap = $(".cart div.cart-wrap");
    empty.style.display = "block";
    cartWrap.style.display = "none";
};
clear.addEventListener("click", function() {
    handleClear();
})
cartData.append(clear);
cart.append(cartData);
