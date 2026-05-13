import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/Componants/Footer";
import Navbar from "@/Componants/Navbar";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "DestiNova",
  description: "A travel booking website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <Navbar />
        <Toaster position="top-center" />
        <main className="container mx-auto flex-grow px-4 md:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
