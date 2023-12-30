"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { usePathname } from "next/navigation";
const Headers = () => {
  const pathname = usePathname();
  const { user, error, isLoading } = useUser();
  const isActive = (path) => {
    return path === pathname
      ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
      : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300";
  };
  return (
    <header className="header">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a className="font-bold text-xl text-indigo-600" href="/">
              Mindmap Flow
            </a>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                className="svg-inline--fa fas fa-bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <Link className={isActive("/")} href="/">
              Trang chủ
            </Link>
            <Link className={isActive("/about")} href="/about">
              Giới thiệu
            </Link>
            <Link className={isActive("/features")} href="/features">
              Tính năng
            </Link>
            <Link className={isActive("/price")} href="/price">
              Bảng giá
            </Link>
            <Link className={isActive("/contact")} href="/contact">
              Liên hệ
            </Link>
            {!user ? (
              <>
                <Link
                  href="/api/auth/login"
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/api/auth/login"
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                >
                  Đăng ký
                </Link>
              </>
            ) : (
              <>
                <div className="p-2 lg:px-4 md:mx-2 text-indigo-700 text-center border border-transparent rounded bg-indigo-100 transition-colors duration-300">
                  Hi, {user.name}
                </div>
                <Link className={isActive("/mindmap")} href="/mindmap">
                  Mindmap
                </Link>
                <Link
                  href="/api/auth/logout"
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                >
                  Đăng xuất
                </Link>
              </>
            )}
            {isLoading && (
              <div className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded bg-indigo-100 transition-colors duration-300">
                Loading...
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
