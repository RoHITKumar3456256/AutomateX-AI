import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-slate-600">Choose the plan that fits your scale.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PRICING.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 border ${
                tier.isPopular 
                  ? 'border-brand-teal bg-white shadow-xl scale-105 z-10' 
                  : 'border-slate-200 bg-slate-50 text-slate-600'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-teal text-brand-navy px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-lg font-bold ${tier.isPopular ? 'text-brand-teal' : 'text-slate-900'}`}>{tier.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-slate-500 ml-1">/mo</span>}
                </div>
                <p className="mt-4 text-sm text-slate-500 px-4">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${tier.isPopular ? 'text-brand-teal' : 'text-slate-400'}`} />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.isPopular ? 'primary' : 'outline'} 
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {tier.name === 'Enterprise' ? 'Talk to Sales' : `Get ${tier.name}`}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
