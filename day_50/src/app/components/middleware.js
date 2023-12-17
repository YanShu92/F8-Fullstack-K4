import { NextResponse } from "next/server";
const isLogin = false;
export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/login") && !isLogin) {
    //Chuyển hướng
    const urlLogin = `${request.nextUrl.origin}/login`;
    return NextResponse.redirect(urlLogin);
  }
  //Request
  const searchParams = request.nextUrl.searchParams;
  const cookie = request.headers.get("cookie");
  const username = request.cookies.get("username");
  const email = request.cookies.get("email");

  //Response
  const response = NextResponse.next();
  //Thay đổi các thông tin response: status, header,...
  response.headers.set("x-api-key", "ahihi");
  //HTTP --> set cookie từ server bằng cách set header: Set-Cookie
  //   response.headers.set("Set-Cookie", "phone=0388875179;path=/;httpOnly");
  //   response.cookies.set({
  //     name: "phone",
  //     value: "0123",
  //     path: "/",
  //     httpOnly: true,
  //     maxAge: 86400,
  //   });
  response.cookies.delete("phone");
  return response;
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
