import "../assets/style.scss";
export const DefaultLayout = () => {
  return `<header class="header">
  <h1><a href="/" data-route>Mỹ phẩm Huyền Hoa</a></h1>
</header>
<div class="container">
  <nav class="nav-menu">
    <h2>Menu</h2>
    <ul>
      <li><a href="/" data-route>Trang chủ</a></li>
      <li><a href="/gioi-thieu" data-route>Giới thiệu</a></li>
      <li><a href="/san-pham" data-route>Sản phẩm</a></li>
    </ul>
  </nav>
  <main class="main">
    {body}
  </main>
</div>
<footer>
  <h2><a href="/" data-route>Thiên đường của vẻ đẹp tự nhiên</a></h2>
</footer>`;
};
