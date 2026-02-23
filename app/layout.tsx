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
  title: "Jaseem T K — Full Stack Developer Portfolio",
  description: "Portfolio of Jaseem T K, Full Stack Developer.",
};


export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jaseem T K",
      url: "https://jaseem.work",
      jobTitle: "Full Stack Developer",
      sameAs: [
        "https://github.com/mhdjaseemtk",
        "https://www.linkedin.com/in/jaseemtk/"
      ]
    })
  }}
/>
      </head>
      
      <body className={`${inter.variable} ${oswald.variable} bg-black text-white antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}