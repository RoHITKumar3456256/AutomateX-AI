import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-2 text-white mb-4">
                <Logo className="h-8 w-8" />
                <span className="text-lg font-bold">AutomateX AI</span>
             </div>
             <p className="text-sm mb-6">
                Intelligent Automation for Real Estate, Travel, Healthcare, F&B, Law & Small Businesses.
             </p>
             <div className="flex space-x-4">
                <a href="#" className="hover:text-brand-teal transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-brand-teal transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-brand-teal transition-colors"><Github size={20} /></a>
             </div>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
             <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-teal transition-colors">About</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Contact</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Solutions</h4>
             <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-teal transition-colors">Real Estate</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Travel</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Enterprise</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
             <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Data Processing</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
           <div>&copy; {new Date().getFullYear()} AutomateX AI. All rights reserved.</div>
           <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-6">
              <a href="https://www.automatex.ai" className="hover:text-brand-teal transition-colors">www.automatex.ai</a>
              <a href="mailto:hello@automatex.ai" className="hover:text-brand-teal transition-colors">hello@automatex.ai</a>
           </div>
        </div>
      </div>
    </footer>
  );
};
