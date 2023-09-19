var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;

var carouselNextBtn = carousel.querySelector(".carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel-nav .prev");

// Tính kích thước 1 item
var itemWidth = carouselInner.clientWidth;
// lấy kích thước chiều rộng của 1 element

// Tính tổng kích thước items
var totalWidth = carouselItems.length * itemWidth;

// cập nhật css
carouselInner.style.width = `${totalWidth}px`;

// tạo dots
var totalImg = carouselInner.children.length;
var dot = document.querySelector(".dot");
for (var i = 0; i < totalImg; i++) {
  var span = document.createElement("span");
  span.dataset.index = i;
  dot.appendChild(span);
}

var position = 0,
  dotIndex = 0;
dot.children[dotIndex].classList.add("active");
var dotItem = document.querySelectorAll(".dot span");

// Lắng nghe sự kiện next
// Khi bấm next trừ đi kích thước của 1 item
carouselNextBtn.addEventListener("click", function () {
  if (Math.abs(position) + itemWidth * 2 > totalWidth) return;
  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;

  dot.children[-position / itemWidth].classList.add("active");
  dot.children[-position / itemWidth - 1].classList.remove("active");
});

carouselPrevBtn.addEventListener("click", function () {
  if (Math.abs(position) < itemWidth) return;
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;

  dot.children[-position / itemWidth].classList.add("active");
  dot.children[-position / itemWidth + 1].classList.remove("active");
});

dotItem.forEach(function (item) {
  item.addEventListener("click", function (e) {
    var dotActive = document.querySelector(".dot span.active");
    var current = e.target.getAttribute("data-index");
    position = -itemWidth * current;
    dotActive.classList.remove("active");
    e.target.classList.add("active");
    carouselInner.style.translate = `${position}px`;
  });
});

var limit = (itemWidth * 15) / 100;
var items = document.querySelectorAll(".item");
items.forEach(function (item, index) {
  var mouseStart,
    isDown = false;
  item.addEventListener("mousedown", function (e) {
    if (isDown === false) {
      e.preventDefault();
      isDown = true;
      mouseStart = e.offsetX;
    }
  });

  item.addEventListener("mousemove", function (e) {
    if (isDown === true) {
      item.style.cursor = "move";
      mouseMove = e.clientX - mouseStart;
      var pos = position + mouseMove;
      item.parentElement.style.translate = `${pos}px`;
      item.parentElement.style.transition = "translate 0s ease";

      if (Math.abs(mouseMove) >= limit) {
        if (mouseMove < 0) {
          if (index === items.length - 1) return;
          position -= itemWidth;
          item.parentElement.style.transition = "translate 0.4s ease";
          item.parentElement.style.translate = `${position}px`;
          dot.children[-position / itemWidth].classList.add("active");
          dot.children[-position / itemWidth - 1].classList.remove("active");
          isDown = false;
        } else {
          if (index === 0) return;
          position += itemWidth;
          item.parentElement.style.transition = "translate 0.4s ease";
          item.parentElement.style.translate = `${position}px`;
          dot.children[-position / itemWidth].classList.add("active");
          dot.children[-position / itemWidth + 1].classList.remove("active");
          isDown = false;
        }
      }
    }
  });

  item.addEventListener("mouseup", function (e) {
    item.style.cursor = "default";
    isDown = false;
    item.parentElement.style.translate = `${position}px`;
    item.parentElement.style.transition = "translate 0.4s ease";
  });
});
