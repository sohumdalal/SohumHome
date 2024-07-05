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


/* 
todo: make links black, and underlined
do a dark mode
add spacing throughout + kearning
add the shutter rotater
acctually add my links
add a little note at the bottom thats says made by me
fix media quries for mobile
make tagline smaller


*/