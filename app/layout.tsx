import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ծննդյան հրավեր",
  description: "Ծննդյան հրավեր",
  openGraph: {
    title: "Ծննդյան հրավեր",
    description: "Սիչով հրավիրում եմ․․․",
    url: "https://event-short-2.vercel.app/",
    siteName: "Ծննդյան հրավեր",
    images: [
      {
        url: "/first.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
