import React from 'react';
import { SERVICES } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-amber font-semibold uppercase tracking-wider text-sm">Capabilities</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">What we automate</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We build end-to-end systems that handle the heavy lifting, from the first hello to the final invoice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300 group cursor-default">
              <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-teal transition-colors duration-300">
                <service.icon className="w-5 h-5 text-white group-hover:text-brand-navy" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
