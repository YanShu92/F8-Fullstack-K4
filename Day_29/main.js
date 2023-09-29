var list = document.querySelector(".list");
var module = [
  "Mở đầu",
  "Chuyển động một chiều",
  "Chuyển động hai chiều",
  "Các định luật của Newton",
];
var units = [
  {
    unit: [
      "Mô hình, lí thuyết và các định luật",
      "Phép đo và độ bất định. Các chuẩn",
      "Các hệ đơn vị",
      "Thứ nguyên, đơn vị và độ chính xác",
      "Phương pháp giải bài toán",
    ],
  },
  {
    unit: [
      "Vectơ vị trí và độ dịch chuyển",
      "Vận tốc và tốc độ",
      "Chuyển động đều",
      "Gia tốc",
      "Chuyển động biến đổi đều",
      "Rơi tự do",
    ],
  },
  {
    unit: [
      "Vị trí, vận tốc và gia tốc",
      "Gia tốc không đổi : chuyển động của viên đạn",
      "Chuyển động tròn đều",
      "Chuyển động tương đối",
    ],
  },
  {
    unit: [
      "Lực và khối lượng",
      "Định luật thứ nhất của Newton",
      "Định luật thứ hai của Newton",
      "Định luật thứ ba của Newton",
      "Trọng lượng và lực hấp dẫn của Trái Đất",
      "Các lực tiếp xúc : lực pháp tuyến và lực ma sát",
    ],
  },
];
var count = 0;
module.forEach((item, index) => {
  var node = document.createElement("div");
  node.className = "item module";
  node.innerHTML = `Module ${index + 1}: <span>${item}</span>`;
  list.append(node);
  units[index].unit.forEach((unit, indexUnit) => {
    var nodeIt = document.createElement("div");
    nodeIt.className = "item";
    count++;
    nodeIt.innerHTML = `Unit ${count}: <span>${unit}</span>`;
    list.append(nodeIt);
  });
});
// chống copytext
document.addEventListener("copy", (e) => {
    e.preventDefault();
}, false);

var sortItems = function() {
    var listSort = list.querySelectorAll(".item");
    var countItem = 0, countModule = 0;
    listSort.forEach((ele) => {
        if (ele.classList.contains("module")) {
            var text  = ele.children[0].textContent;
            ele.innerHTML = `Module ${++countModule}: <span>${text}</span>`;
        } else {
            var text  = ele.children[0].textContent;
            ele.innerHTML = `Unit ${++countItem}: <span>${text}</span>`;
        }
    })
}
var items = document.querySelectorAll(".list .item");
var startDrag, 
    changeHeight = items[0].offsetHeight / 2, currentDrag;
items.forEach(item => {
    item.draggable = "true";
    item.addEventListener("dragstart", function(e) {
        this.classList.add("dragging");
        startDrag =  e.clientY;
        currentDrag = this;
    });

    item.addEventListener("dragend", function(e) {
        this.classList.remove("dragging");
    });

    item.addEventListener("dragover", function(e) {
        e.preventDefault();
        if (e.clientY - startDrag >= changeHeight) {
            list.insertBefore(currentDrag, this.nextElementSibling);
        } else {
            list.insertBefore(currentDrag, this);
        };
    });
    
    item.addEventListener("drop", function(e) {    
        sortItems();
    });

    item.addEventListener("dragend", function(e) {    
        sortItems();
    });
});

