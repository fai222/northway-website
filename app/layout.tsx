import type { Metadata } from "next";
import { Figtree, Manrope, Pacifico } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["800"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Northway - Design as a Subscription",
  description:
    "The design subscription service for agencies, startups, corporations and entrepreneurs.",
  icons: {
    icon: "https://framerusercontent.com/images/5wLA5w9yWuVQwoA2TUvWL7hbjE.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${manrope.variable} ${pacifico.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
