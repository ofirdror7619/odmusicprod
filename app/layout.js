import { Cormorant_Garamond, UnifrakturCook } from "next/font/google";
import "./globals.css";

const bodyFont = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const titleFont = UnifrakturCook({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata = {
  title: "Ofir Dror Music Production",
  description: "Black metal distortion VST plugin by Ofir Dror",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${titleFont.variable}`}>{children}</body>
    </html>
  );
}
