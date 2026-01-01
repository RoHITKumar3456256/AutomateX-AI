import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowDown } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          <p className="mt-4 text-slate-400">From discovery to optimization, we handle everything.</p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800"></div>

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Box */}
                <div className="w-full md:w-5/12 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-brand-teal/50 transition-colors">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-bold text-slate-700">{step.step}</span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 pl-14">{step.description}</p>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-brand-navy border-4 border-brand-teal items-center justify-center z-10"></div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
                
                {/* Mobile Connector */}
                {index !== PROCESS_STEPS.length - 1 && (
                  <div className="md:hidden text-slate-600 my-4">
                    <ArrowDown size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-sm text-slate-500 bg-slate-900/50 inline-block px-4 py-2 rounded-full border border-slate-800 mx-auto w-full md:w-auto">
            We handle data privacy, integrations, and staff training.
          </div>
        </div>
      </div>
    </section>
  );
};
