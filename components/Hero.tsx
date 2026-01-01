import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-navy min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
              <span className="text-brand-teal text-xs md:text-sm font-semibold uppercase tracking-wider">
                Intelligent Automation for Growth
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Automate Everything That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-teal-200">Slows Your Business Down</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light">
              AutomateX AI builds AI-powered automation for enquiries, leads, bookings, and support — so you save time, increase revenue and delight customers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a Discovery Call
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                See Pricing
              </Button>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-sm text-slate-400">
              {['Fast implementation', 'Affordable pricing', 'Industry-specific'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Workflow Diagram Concept */}
          <div className="relative hidden lg:block h-full min-h-[500px]">
            <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
               {/* Decorative UI Mockup */}
               <div className="p-6 h-full flex flex-col">
                  {/* Fake Header */}
                  <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-2 w-20 bg-slate-700 rounded"></div>
                  </div>

                  {/* Flow Diagram */}
                  <div className="flex-1 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 p-4 bg-slate-700 rounded-lg border border-slate-600 shadow-lg z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">In</div>
                        <div className="text-sm text-white font-medium">New Enquiry</div>
                      </div>
                    </div>
                    
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 h-12 w-0.5 bg-slate-600"></div>

                    <div className="absolute top-32 left-1/2 -translate-x-1/2 w-64 p-4 bg-brand-teal/20 rounded-lg border border-brand-teal/50 shadow-lg z-20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-brand-navy">
                          <CheckCircle2 size={16} />
                        </div>
                        <div className="text-sm text-white font-medium">AI Qualifies Lead</div>
                      </div>
                      <div className="mt-2 text-xs text-brand-teal">Score: 95/100 • Hot Lead</div>
                    </div>

                    <div className="absolute top-52 left-1/2 -translate-x-1/2 h-12 w-full max-w-[200px] flex justify-between">
                       <div className="w-0.5 h-full bg-slate-600 rotate-12 origin-top"></div>
                       <div className="w-0.5 h-full bg-slate-600 -rotate-12 origin-top"></div>
                    </div>

                    <div className="absolute top-64 left-[20%] w-40 p-3 bg-slate-700 rounded-lg border border-slate-600 text-center">
                      <div className="text-xs text-slate-300">Update CRM</div>
                    </div>
                    <div className="absolute top-64 right-[20%] w-40 p-3 bg-slate-700 rounded-lg border border-slate-600 text-center">
                      <div className="text-xs text-slate-300">Book Meeting</div>
                    </div>

                    {/* Notification Toast Mockup */}
                    <div className="absolute bottom-8 right-8 bg-white text-slate-900 p-4 rounded-lg shadow-xl border-l-4 border-brand-amber max-w-xs animate-pulse">
                      <div className="font-bold text-sm mb-1">Success!</div>
                      <div className="text-xs text-slate-600">Calendar invite sent to John Doe. CRM updated.</div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Floating Image Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800 p-2 rounded-xl shadow-2xl border border-slate-600">
               <img src="https://picsum.photos/150/150" alt="Confident business owner" className="w-24 h-24 rounded-lg object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
