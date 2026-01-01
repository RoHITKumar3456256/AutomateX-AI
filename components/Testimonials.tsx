import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Results that speak for themselves</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                    <div className="flex text-brand-amber mb-4">
                        {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                    </div>
                    <p className="text-lg italic text-slate-300 mb-6">
                        "AutomateX reduced response time from 6 hours to under 5 minutes for our agency. We're closing 30% more leads."
                    </p>
                    <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-slate-600 rounded-full overflow-hidden">
                             <img src="https://picsum.photos/100/100?random=1" alt="Client" />
                         </div>
                         <div>
                             <div className="font-bold">Sarah Jenkins</div>
                             <div className="text-sm text-brand-teal">Director, Premier Real Estate</div>
                         </div>
                    </div>
                </div>

                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                    <div className="flex text-brand-amber mb-4">
                        {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                    </div>
                    <p className="text-lg italic text-slate-300 mb-6">
                        "The WhatsApp automation for our dental clinic has cut our reception workload in half. Patients love the instant booking."
                    </p>
                    <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-slate-600 rounded-full overflow-hidden">
                             <img src="https://picsum.photos/100/100?random=2" alt="Client" />
                         </div>
                         <div>
                             <div className="font-bold">Dr. Michael Chen</div>
                             <div className="text-sm text-brand-teal">Founder, BrightSmile Dental</div>
                         </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               <div className="text-2xl font-bold font-serif">REAL ESTATE INC</div>
               <div className="text-2xl font-bold font-sans tracking-widest">TRAVEL.CO</div>
               <div className="text-2xl font-bold font-mono">LawFirm LLP</div>
               <div className="text-2xl font-bold italic">Bistro Cafe</div>
            </div>
        </div>
    </section>
  );
};
