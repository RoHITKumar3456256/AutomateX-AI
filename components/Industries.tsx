import React from 'react';
import { INDUSTRIES } from '../constants';

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Industry Solutions</h2>
          <p className="mt-4 text-slate-600">Tailored automation for your specific needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-teal">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-teal-50 rounded-lg text-brand-teal">
                    <industry.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{industry.name}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {industry.useCase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
