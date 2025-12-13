import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Load Oswald with specific weights to ensure the "Bold" look works
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Innovate For Design",
  description: "Portfolio Hero Section",
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} bg-black text-white antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}