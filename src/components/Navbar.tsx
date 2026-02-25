"use client";

import React, { useState, useEffect } from 'react';
import { PawPrint, Menu, X, ChevronRight, Heart, ShieldCheck, ExternalLink } from "lucide-react";

const FORMS = {
  ADOPTION: "https://form.jotform.com/202144222321335",
  DONATE: "https://form.jotform.com/210455402208343",
  GIFT_AID: "https://form.jotform.com/260104680813349"
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* 1. DARK OVERLAY (Appears when menu is open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 md:px-6 py-3 md:py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <a href="/" className="flex items-center gap-2 group cursor-pointer relative z-[51]">
            <div className="bg-pink-600 p-1.5 md:p-2 rounded-lg md:rounded-xl group-hover:rotate-12 transition-transform shadow-md shadow-pink-100">
              <PawPrint size={20} className="text-white" fill="currentColor" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter text-gray-900 uppercase">LITTLE PAWS</span>
          </a>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-bold text-gray-600 hover:text-pink-600 transition-colors">Home</a>
            <a href="/how-to-help" className="text-sm font-bold text-gray-600 hover:text-pink-600 transition-colors">How to Help</a>
            <a href={FORMS.DONATE} target="_blank" className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-pink-200 transition-all active:scale-95">
              Donate Now
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2 relative z-[51]">
            <a href={FORMS.DONATE} target="_blank" className="bg-pink-600 text-white px-4 py-2 rounded-lg font-bold text-xs shadow-md shadow-pink-100">
              Donate
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-600'}`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE SIDEBAR MENU --- */}
        <div className={`fixed inset-y-0 right-0 w-[280px] bg-[#fafafa] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden border-l border-gray-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-6 pt-24 space-y-8">
            
            {/* Nav Links */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Menu</p>
              <a href="/" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl text-lg font-bold text-gray-900 shadow-sm active:bg-gray-50">
                Home <ChevronRight size={18} className="text-pink-600" />
              </a>
              <a href="/how-to-help" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl text-lg font-bold text-gray-900 shadow-sm active:bg-gray-50">
                How to Help <ChevronRight size={18} className="text-pink-600" />
              </a>
            </div>

            {/* Form Links */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Quick Links</p>
              <a href={FORMS.ADOPTION} target="_blank" className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="bg-pink-50 p-2 rounded-xl text-pink-600"><Heart size={20}/></div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-gray-900">Adoption Form</span>
                  <span className="text-[10px] text-gray-500 font-medium italic">Apply to foster or adopt</span>
                </div>
                <ExternalLink size={14} className="ml-auto text-gray-300" />
              </a>
              
              <a href={FORMS.GIFT_AID} target="_blank" className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="bg-green-50 p-2 rounded-xl text-green-600"><ShieldCheck size={20}/></div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-gray-900">Gift Aid</span>
                  <span className="text-[10px] text-gray-500 font-medium italic">Boost your donation 25%</span>
                </div>
                <ExternalLink size={14} className="ml-auto text-gray-300" />
              </a>
            </div>

            <div className="mt-auto pt-6 text-center">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Little Paws Rescue UK</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}