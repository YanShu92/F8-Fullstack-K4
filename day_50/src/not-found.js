import image404 from "@/assets/images/404.jpg";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Image
        src={image404}
        alt="404 not found"
        style={{
          maxWidth: "300px",
          height: "auto",
        }}
      />
      <h2>Lạc đường rồi. Về trang chủ ngay</h2>
      <Link href={"/login"}>Quay về bờ</Link>
    </div>
  );
};

export default NotFound;
