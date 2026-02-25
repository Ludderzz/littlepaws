import React from 'react';
import { 
  Facebook, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  PawPrint, 
  ChevronRight, 
  Gift, 
  Home, 
  Users, 
  ShoppingBag, 
  Coins
} from 'lucide-react';

const FORMS = {
  ADOPTION: "https://form.jotform.com/202144222321335",
  DONATE: "https://form.jotform.com/210455402208343",
  GIFT_AID: "https://form.jotform.com/260104680813349"
};

const HelpCard = ({ title, description, icon: Icon, link, buttonText, color }: any) => (
  <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
    <div className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
      <Icon size={28} className="text-white" />
    </div>
    <h3 className="text-2xl font-black mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed mb-8 flex-grow">{description}</p>
    <a 
      href={link} 
      target="_blank" 
      className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-4 px-6 rounded-2xl hover:bg-gray-800 transition-colors"
    >
      {buttonText} <ChevronRight size={18} />
    </a>
  </div>
);

export default function HowToHelp() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-pink-600 py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Every little <br /><span className="text-pink-200">helps a lot.</span>
          </h1>
          <p className="text-xl text-pink-100 font-medium max-w-2xl mx-auto leading-relaxed">
            We are 100% volunteer-led. Whether you have five pounds or five hours, your support keeps our rescue running and our cats fed.
          </p>
        </div>
        <PawPrint size={400} className="absolute -right-20 -bottom-20 text-white/10 rotate-12" fill="currentColor" />
      </section>

      {/* --- MAIN HELP GRID --- */}
      <main className="max-w-7xl mx-auto px-6 -mt-12 pb-24 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <HelpCard 
            title="Foster a Cat"
            description="We don't have a central cattery. Every cat we save lives in a loving home until they are adopted. We provide the food and vet cover; you provide the space and love."
            icon={Home}
            link={FORMS.ADOPTION}
            buttonText="Apply to Foster"
            color="bg-pink-500"
          />

          <HelpCard 
            title="Make a Donation"
            description="Our vet bills average £2,000+ per month. One-off or monthly donations allow us to take in 'medical cases' that other rescues might have to turn away."
            icon={Coins}
            link={FORMS.DONATE}
            buttonText="Donate Securely"
            color="bg-blue-500"
          />

          <HelpCard 
            title="Gift Aid It"
            description="If you are a UK taxpayer, the government will give us an extra 25p for every £1 you donate—at no cost to you! Please take 60 seconds to fill this in."
            icon={Gift}
            link={FORMS.GIFT_AID}
            buttonText="Complete Form"
            color="bg-green-500"
          />

          <HelpCard 
            title="Volunteer With Us"
            description="Beyond fostering, we need help with transport (driving cats to vets), admin, and fundraising events like car boot sales and eBay listings."
            icon={Users}
            link="https://facebook.com/littlepawsrescue"
            buttonText="Join the Team"
            color="bg-purple-500"
          />

          <HelpCard 
            title="Amazon Wishlist"
            description="Prefer to send a physical gift? Our Amazon Wishlist is full of the specific litter, food, and toys our current fosters desperately need."
            icon={ShoppingBag}
            link="#" 
            buttonText="View Wishlist"
            color="bg-orange-500"
          />

          <HelpCard 
            title="Legacy Giving"
            description="Consider leaving a gift to Little Paws Rescue in your Will. A legacy gift ensures that we can continue to help cats for many years to come."
            icon={Heart}
            link="mailto:info@littlepawsrescue.co.uk"
            buttonText="Inquire via Email"
            color="bg-red-500"
          />

        </div>

        {/* --- REASSURANCE STRIP --- */}
        <div className="mt-20 bg-white border border-gray-100 rounded-[40px] p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex items-center gap-6 text-left">
            <div className="bg-green-50 p-4 rounded-full text-green-600">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h4 className="text-2xl font-black">Where does the money go?</h4>
              <p className="text-gray-500 font-medium">100% of donations go directly to animal welfare. No salaries, no offices.</p>
            </div>
          </div>
          <a href={FORMS.DONATE} className="text-pink-600 font-black text-lg hover:underline flex items-center gap-2">
            View our latest vet bill updates on Facebook <ExternalLink size={20} />
          </a>
        </div>
      </main>

      {/* --- FOOTER (Simplified for this page) --- */}
      <footer className="bg-gray-900 text-white py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-pink-400 font-black uppercase tracking-widest text-sm mb-4">Little Paws Rescue</p>
          <h2 className="text-3xl font-bold mb-8 italic">"Because every cat deserves a second chance."</h2>
          <div className="flex justify-center gap-6">
             <a href="https://facebook.com" className="hover:text-pink-400 transition-colors"><Facebook size={28}/></a>
             <a href="mailto:info@example.com" className="hover:text-pink-400 transition-colors"><Mail size={28}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}