import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "COMET'26 — CDC, IIT Roorkee",
  description: "Designing the future.",
  metadataBase: new URL("https://localhost"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Cursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
