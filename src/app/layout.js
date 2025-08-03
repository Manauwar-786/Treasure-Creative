import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-white">
<Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
