import "./globals.css";
import {Roboto} from "next/font/google";
import Header from "./components/Header";
const roboto = Roboto({subsets: ["latin"], weight: ["400", "500", "700"]});

export const metadata = {
  title: "Web Applications",
  description: "All of my Github repositories in one place",
  keywords: "Web development, web design, react, javascript",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-100`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
