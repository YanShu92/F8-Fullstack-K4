

// # Bài 1
// Lấy kết quả giao giữa 2 mảng
// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];

var arrA = [1, 4, 3, 2, 9, 5];
var arrB = [5, 2, 6, 7, 1, 10, 9];

var similar = arrA.reduce(function (accum, current) {
    if (arrB.includes(current)) {
        accum.push(current);
    }
    return accum;
},[]);
console.log(similar);

// # Bài 2
// Làm phẳng array sau (Chuyển về mảng 1 chiều)
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var flatOutput = function(array) {
    var flatArr = array.reduce(function(flat, current) {
        if (typeof current === "object" && current !== null) {
            return flat.concat(flatOutput(current));
        }
        return  flat.concat(current);
    },[]);
    return flatArr;
}
console.log(flatOutput(arr));

// # Bài 3
// Tách phần tử trong mảng theo đúng kiểu dữ liệu
var arr = [["a", 1, true], ["b", 2, false, null], [0, true, false, "k", "m", undefined]];
// flat array
var flatOutput = function(array) {   
    var flatArr = array.reduce(function(flat, current) {
        if (typeof current === "object" && current !== null) {
            return flat.concat(flatOutput(current));
        }
        return  flat.concat(current);
    },[]);
    return flatArr;
}
var flatArray = flatOutput(arr);  // flattened array
var typeArr = flatArray.map(function(element) {
    return typeof element;
})
typeArr = [...(new Set(typeArr))]; // array about typeof Array

var crop = typeArr.map(function(current){    
    var check = flatArray.filter(function(item) {
        return (typeof item === current)
    });
    return check;
},[]);
console.log(crop);

// # Bài 4
// Dựa vào hình ảnh giao diện sau, hãy thiết kế 1 mảng phù hợp và thực hiện đổ dữ liệu lên giao diện

var sources = [
    {
        srcimg: "./img/sunrise.jpg",
        title: "Tiêu đề bài viết 1",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequatur error vitae placeat perspiciatis laboriosam suscipit ipsa optio, maxime nulla magnam voluptatem sunt dolor ducimus quis cum sint eos officia."
    },
    {
        srcimg: "./img/sunrise.jpg",
        title: "Tiêu đề bài viết 2",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequatur error vitae placeat perspiciatis laboriosam suscipit ipsa optio, maxime nulla magnam voluptatem sunt dolor ducimus quis cum sint eos officia."
    },
    {
        srcimg: "./img/sunrise.jpg",
        title: "Tiêu đề bài viết 3",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequatur error vitae placeat perspiciatis laboriosam suscipit ipsa optio, maxime nulla magnam voluptatem sunt dolor ducimus quis cum sint eos officia."
    },
    {
        srcimg: "./img/sunrise.jpg",
        title: "Tiêu đề bài viết 4",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequatur error vitae placeat perspiciatis laboriosam suscipit ipsa optio, maxime nulla magnam voluptatem sunt dolor ducimus quis cum sint eos officia."
    }
];

var newArr = sources.map(function(source){
    var htmlSource = `
    <li class="item">
        <div class="img">
            <img src="${source.srcimg}" alt="img">
        </div>
        <div class="content-item-wrap">
            <h2 class="title">${source.title}</h2>
            <p class="content-item">${source.content}</p>
        </div>
    </li>
    `;
    return htmlSource;
});
const listContent = document.getElementById("list-content");
listContent.innerHTML = newArr.join(" ");