// Bài 1

var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}
var getError = function(key) {
    // for (var firstKey in errors[key]) break;  // method 1
    // console.log(errors[key][firstKey]);
    console.log(Object.values(errors[key])[0]); // method 2
}
getError('name');
getError('email');

// Bài 2: 
// Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, age và address.
// Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.
// Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xết tăng dần theo tuổi và thêm một thuộc tính mới là shortName của mỗi đối tượng.

var User = function(fullName, age, address) {
    this.name = fullName;
    this.age = age;
    this.address = address;
}

var getShortName = function(fullName) {
    var arr = fullName.split(" ");
    var shortName = [arr[0], arr[arr.length - 1]];
    return shortName.join(" ");
}

var createCustomers = function(args) {
    var newArr = args.map((arg, index) => {
        var user = new User(arg.name, arg.age, arg.address);
        user.shortName = getShortName(user.name);
        return user;
    });
    newArr.sort((a,b) => a.age - b.age);
    return newArr;
}

const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Hoàng Văn D", age: 18, address: "Nam Định" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];  
console.log(createCustomers(customers));

// # Bài 3:
// Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, password và email.
// Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như trên.
// Yêu cầu:
// Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.
// Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.
// Tự động thêm role là user cho mỗi đối tượng.
// Tạo một hàm login nhận vào 2 tham số email và password.
// Yêu cầu:
// Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.
// Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.

var User = function(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
}

const data = [];

var handleRegister = function(name = "", password = "", email = "") {
    if (!name.length || !password.length || !email.length) {
        return console.log("Thông tin không đầy đủ");
    };
    var user = new User(name, password, email);
    var alreadyExist = data.filter((arg) => (arg.name === name) && (arg.password === password) && arg.email === email);
    if (alreadyExist.length) {
        return console.log("Đã đăng kí");
    } else {
        console.log(`Anh/Chị ${user.name} đã đăng kí thành công`);
    }
    user.role = "user";
    data[data.length] = user;
}

var handleLogin = function(email, password) {
    var userInfor = data.filter((arg) => (arg.email === email) && (arg.password === password));
    var result = userInfor.length ? userInfor[0] : "Thông tin đăng nhập không hợp lệ";
    return result;
}

var dataRegister = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);
var dataRegister = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);
var dataRegister = handleRegister(
    "Nguyen Van H",
    "123456743",
    "nguyenvanH@email.com"
);
var dataRegister = handleRegister(
    "Nguyen Van G",
    // "121214124167",
    "nguyenvanG@email.com"
);
var dataRegister = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);

const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(data);
console.log(dataLogin);