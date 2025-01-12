import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const godzillasOfuro = localFont({
  src: './fonts/godzillasofuro.ttf',
  variable: '--font-godzillas-ofuro',
  display: 'swap',
})

const dualityRegular = localFont({
  src: './fonts/duality.ttf',
});

export const metadata = {
  title: "GSAP",
  description: "GSAP animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${godzillasOfuro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
