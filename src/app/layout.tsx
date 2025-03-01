import type { Metadata } from "next";
import "./globals.css";
import MainWrapper from "@/components/layout/mainwrapper/MainWrapper";

export const metadata: Metadata = {
  title: "Sahil Mor",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
