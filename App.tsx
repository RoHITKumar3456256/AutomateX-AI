import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Process />
        <Industries />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
