import image1 from "../assets/image/sanpham1.jpg";
import image2 from "../assets/image/sanpham2.jpg";
import image3 from "../assets/image/sanpham3.jpg";
const image = [image1, image2, image3];
export const ProductDetail = (param) => {
  const { id } = param.data;
  const list = ["Kem dưỡng da tốt", "Đồ trang điểm", "Sữa rửa mặt"];
  return `
    <h1>Chi tiết sản phẩm: </h1>
    <p>${list[id - 1]}</p>    
    <img src="${image[id - 1]}" alt="Anh${id}"></img>
    <button onclick="navigate('/san-pham')">Trở về</button>`;
};
