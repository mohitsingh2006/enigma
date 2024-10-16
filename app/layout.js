import "./globals.css";
import { Bebas_Neue, Roboto, Oxygen } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: "--font-roboto",
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-bebas",
})

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-oxygen",
})

export const metadata = {
  title: "Enigma Info Systems",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${roboto.variable} ${oxygen.variable}`}>{children}</body>
    </html>
  );
}
