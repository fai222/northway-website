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
  metadataBase: new URL("https://northway.agency"),
  title: "Northway — Design & Engineering as a Subscription",
  description:
    "Senior-level design and front-end engineering for one flat monthly rate. Unlimited requests, ~48 hour delivery, unlimited revisions. Pause or cancel anytime.",
  openGraph: {
    title: "Northway — Design & Engineering as a Subscription",
    description:
      "Senior-level design and front-end engineering for one flat monthly rate. Unlimited requests, ~48 hour delivery, unlimited revisions. Pause or cancel anytime.",
    url: "https://northway.agency",
    siteName: "Northway",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Northway — Design & Engineering as a Subscription",
    description:
      "Senior-level design and front-end engineering for one flat monthly rate. Unlimited requests, ~48 hour delivery. Pause or cancel anytime.",
  },
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
