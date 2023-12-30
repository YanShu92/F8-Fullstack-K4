import { Inter } from "next/font/google";
import "./assets/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });
import { UserProvider } from "@auth0/nextjs-auth0/client";
export const metadata = {
  title: "Create Mindmap",
  description: "Create Mindmap ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressContentEditableWarning={true}>
        <>
          <UserProvider>
            <Headers />
            {children}
            <Footer />
          </UserProvider>
        </>
      </body>
    </html>
  );
}
