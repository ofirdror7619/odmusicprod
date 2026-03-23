import { Cormorant_Garamond, UnifrakturCook } from "next/font/google";
import "./globals.css";
import CursorGlow from "./cursor-glow";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${titleFont.variable}`} suppressHydrationWarning>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
