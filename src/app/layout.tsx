import { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | QR code component",
  description: "Page built for a Frontend Mentor challenge",
  authors: [{ name: "Jena Carry" }],
  keywords: [
    "Frontend Mentor",
    "Frontend",
    "Mentor",
    "QR",
    "Code",
    "Component",
    "HTML",
    "CSS",
    "Tailwindcss",
    "React",
    "Next.js",
    "Responsive",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
