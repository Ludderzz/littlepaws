import React from 'react';
import { 
  Facebook, 
  Heart, 
  PawPrint, 
  Info, 
  ExternalLink, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ChevronRight,
  Sparkles,
  ShieldCheck,
  FileText,
  Coins
} from 'lucide-react';

// --- CONSTANTS FOR EASY UPDATING ---
const FORMS = {
  ADOPTION: "https://form.jotform.com/202144222321335",
  DONATE: "https://form.jotform.com/210455402208343",
  GIFT_AID: "https://form.jotform.com/260104680813349"
};

const NavItem = ({ label }: { label: string }) => (
  <a href="#" className="text-sm font-semibold text-gray-600 hover:text-pink-600 transition-colors">
    {label}
  </a>
);

const StatCard = ({ label, value, icon: Icon }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
    <div className="bg-pink-50 w-10 h-10 rounded-lg flex items-center justify-center text-pink-500 mb-4">
      <Icon size={20} />
    </div>
    <div className="text-2xl font-black text-gray-900">{value}</div>
    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</div>
  </div>
);

export default function ProfessionalCharitySite() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 selection:bg-pink-100 selection:text-pink-600 font-sans">
      
      <main>
        {/* 3. HERO SECTION */}
        <section className="relative px-6 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-xs font-bold mb-6">
                <Sparkles size={14} /> 100% Volunteer Operated
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 text-gray-900">
                Small paws, <br />
                <span className="text-pink-600">Big futures.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
                We provide a safe haven for cats and kittens in the South West. Every adoption is a life saved and a new story begun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={FORMS.ADOPTION}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-xl"
                >
                  Start Adoption Form <FileText size={20} />
                </a>
                <button className="bg-white border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold hover:border-pink-200 transition-all text-gray-600">
                  Our Mission
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-orange-50 rounded-[40px] relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-pink-200 italic font-medium">
                  Rescue Photography
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-sm font-black italic text-gray-900">Vetted & Safe</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Registered Rescue</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SUPPORT LINKS GRID (New Section for your links) */}
        <section className="px-6 py-12 bg-gray-50/50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 text-center">Ways to Support Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <a href={FORMS.ADOPTION} target="_blank" className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="bg-pink-50 w-12 h-12 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-black mb-2">Apply to Adopt</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Find your new best friend by completing our initial matching questionnaire.</p>
                <div className="flex items-center gap-2 text-pink-600 font-bold text-sm">
                  Open Form <ChevronRight size={16} />
                </div>
              </a>

              <a href={FORMS.DONATE} target="_blank" className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Coins size={24} />
                </div>
                <h3 className="text-xl font-black mb-2">Make a Donation</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Every penny goes directly toward vet bills, food, and litter for our rescues.</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  Support Us <ChevronRight size={16} />
                </div>
              </a>

              <a href={FORMS.GIFT_AID} target="_blank" className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-black mb-2">Gift Aid Form</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Boost your donation by 25% at no extra cost to you. Simple and fast.</p>
                <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                  Complete Form <ChevronRight size={16} />
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* 5. DYNAMIC FACEBOOK FEED SECTION */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black mb-2">Rescued & Ready</h2>
              <p className="text-gray-500 font-medium italic">Updates synced from our Facebook team</p>
            </div>
            <a href="https://facebook.com" target="_blank" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
              <Facebook size={20} /> Latest Facebook News <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <article key={i} className="group">
                <div className="bg-gray-200 aspect-[4/5] rounded-[32px] mb-6 overflow-hidden transition-all group-hover:shadow-2xl">
                  {/* Future image from FB API */}
                </div>
                <div className="flex items-center gap-3 mb-4 text-[10px] font-black uppercase tracking-widest">
                  <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded">Update</span>
                  <span className="text-gray-400 italic">2 days ago</span>
                </div>
                <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-pink-600 transition-colors">
                  New Arrival: Meet Toby
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">
                  Toby was found wandering the streets of Bristol. He's a sweet boy who loves chin scratches...
                </p>
                <a href="#" className="inline-block text-sm font-black border-b-2 border-pink-200 pb-1 hover:border-pink-600 transition-all">READ MORE</a>
              </article>
            ))}
          </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto bg-pink-600 rounded-[48px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-pink-200">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Want to help?</h2>
              <p className="text-pink-100 mb-10 max-w-xl mx-auto text-lg font-medium">
                We are always looking for fosters, volunteers, and donations to keep our gates open.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={FORMS.DONATE} target="_blank" className="bg-white text-pink-600 px-10 py-4 rounded-2xl font-black hover:bg-gray-50 transition-all shadow-xl">
                  Donate Money
                </a>
                <a href={FORMS.ADOPTION} target="_blank" className="bg-pink-700 text-white px-10 py-4 rounded-2xl font-black hover:bg-pink-800 transition-all border border-pink-500">
                  Foster a Cat
                </a>
              </div>
            </div>
            <PawPrint size={400} className="absolute -right-20 -bottom-20 text-white/10 rotate-45" fill="currentColor" />
          </div>
        </section>
      </main>

      
    </div>
  );
}