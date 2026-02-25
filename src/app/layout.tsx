import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import the new component
import { Facebook, Heart, MessageCircle, MapPin, Clock, PawPrint } from "lucide-react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Paws Rescue | Somerset Cat Rescue",
  description: "A volunteer-run rescue dedicated to the welfare of cats and kittens.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa] text-gray-900`}>
        {/* TOP UTILITY BAR */}
        <div className="bg-gray-900 text-white py-2 px-4 md:px-6 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em]">
          <div className="max-w-7xl mx-auto flex justify-between">
            <div className="flex gap-4">
               <span className="flex items-center gap-1.5"><MapPin size={12} className="text-pink-400"/> Somerset, UK</span>
            </div>
            <a href="#" className="hover:text-pink-400">Volunteer Portal</a>
          </div>
        </div>
        
        <Navbar /> {/* This is the mobile-friendly menu component */}

        <main className="min-h-screen">{children}</main>

        <footer className="bg-white border-t border-gray-100 py-12 md:py-16 px-6 mt-10 md:mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
            <div className="flex flex-center flex-col md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-pink-600 p-2 rounded-xl"><PawPrint size={20} className="text-white" fill="currentColor" /></div>
                <span className="text-lg font-black tracking-tighter uppercase">LITTLE PAWS RESCUE</span>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">© 2026 Maintenance-Free Automation</p>
            </div>
            <div className="flex gap-10 md:gap-8">
              <Facebook size={28} className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
              <Heart size={28} className="text-gray-400 hover:text-pink-600 transition-colors cursor-pointer" />
              <MessageCircle size={28} className="text-gray-400 hover:text-green-600 transition-colors cursor-pointer" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}