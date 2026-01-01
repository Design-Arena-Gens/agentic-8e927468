import type { Metadata } from "next";
import { Cairo, Tajawal, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "زخم | إنتاجية إنسانية بلا ضغط",
  description:
    "منصة إنتاجية عربية تعتمد على الطاقة اليومية، رفيق ذكي، وجاميفيكاشن صحية لدعمك في أيام الحماس وحتى الأيام السيئة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${tajawal.variable} ${notoSansArabic.variable} antialiased bg-gradient-to-b from-[#0f1923] to-[#111b29] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
