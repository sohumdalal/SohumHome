import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  weight: ['200', '300', '400'],
  subsets: ["latin"] 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}


/* 
todo:

do a dark mode
fix arrows on mobile
margin bottom on the colophon
clean ALL Links
send to bianca for edits


*/