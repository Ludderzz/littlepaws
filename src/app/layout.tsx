import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import the icons for the layout
import { PawPrint, Facebook, Heart, MessageCircle, MapPin, Clock } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Paws Rescue | Somerset Cat Rescue",
  description: "A volunteer-run rescue dedicated to the welfare of cats and kittens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa] text-gray-900`}>

            {/* 1. TOP UTILITY BAR */}
      <div className="bg-gray-900 text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.1em]">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-pink-400"/> Somerset, UK</span>
            <span className="hidden md:flex items-center gap-1.5"><Clock size={12} className="text-pink-400"/> Response time: ~2 hours</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-400">Volunteer Portal</a>
            <a href="#" className="hover:text-pink-400">Terms</a>
          </div>
        </div>
      </div>
        
        {/* GLOBAL NAVIGATION (Shared across all pages) */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-pink-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <PawPrint size={24} className="text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tighter text-gray-900 uppercase">LITTLE PAWS</span>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-sm font-semibold text-gray-600 hover:text-pink-600 transition-colors">Home</a>
              <a href="/how-to-help" className="text-sm font-semibold text-gray-600 hover:text-pink-600 transition-colors">How to Help</a>
              <a 
                href="https://form.jotform.com/210455402208343" 
                target="_blank"
                className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-pink-200 transition-all active:scale-95"
              >
                Donate Now
              </a>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT (This is where Home or How to Help pages load) */}
        {children}

        {/* GLOBAL FOOTER (Shared across all pages) */}
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-pink-600 p-2 rounded-xl">
                  <PawPrint size={20} className="text-white" fill="currentColor" />
                </div>
                <span className="text-lg font-black tracking-tighter">LITTLE PAWS RESCUE</span>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">© 2026 Maintenance-Free Automation</p>
            </div>
            <div className="flex gap-8">
              <Facebook size={24} className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
              <Heart size={24} className="text-gray-400 hover:text-pink-600 transition-colors cursor-pointer" />
              <MessageCircle size={24} className="text-gray-400 hover:text-green-600 transition-colors cursor-pointer" />
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}