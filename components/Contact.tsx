import React, { useState } from 'react';
import { Button } from './Button';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-800">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="text-brand-teal" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
                       <div className="pt-2">{faq.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Start Automating Today</h2>
              <p className="text-slate-600 mt-2">Book a free discovery call to map out your custom solution.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                 </div>
                 <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                    <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="Your Company" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
                    <input type="url" id="website" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="https://example.com" />
                 </div>
                 <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                    <select id="industry" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all bg-white">
                       <option>Real Estate</option>
                       <option>Travel</option>
                       <option>Healthcare / Dental</option>
                       <option>F&B</option>
                       <option>Law</option>
                       <option>Small Business</option>
                       <option>Other</option>
                    </select>
                 </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Brief Description</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="Tell us what you want to automate..."></textarea>
              </div>

              <div className="text-xs text-slate-500 text-center">
                 We never store client data without permission. Integrations use secure APIs.
              </div>

              <Button size="lg" className="w-full">
                Schedule Discovery Call
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
