import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  weight: '400',
  subsets: ["latin"] 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
