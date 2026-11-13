import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ThaiHome | Thailand Property",
  description: "Find property for sale and rent in Thailand."
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="zh"><body>{children}</body></html>;
}
