import type { Metadata } from "next";
import "./globals.css";
import MainWrapper from "@/components/layout/mainwrapper/MainWrapper";
import { Toaster } from "sonner";

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
        <MainWrapper>
        <Toaster richColors position="bottom-right" />
        {children}
        </MainWrapper>
      </body>
    </html>
  );
}
