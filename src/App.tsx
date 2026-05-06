/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  Wheat, 
  Clock, 
  Flame, 
  MapPin, 
  Instagram, 
  Menu, 
  X 
} from 'lucide-react';

// Bread Data
const BREAD_TYPES = [
  {
    id: 'country-loaf',
    name: 'Country Loaf',
    description: 'Our signature blend of three heritage wheats, cold-fermented for 36 hours.',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=800',
    stats: { fermentation: '36h', hydration: '82%', grains: '3' }
  },
  {
    id: 'ancient-grain',
    name: 'Ancient Rye',
    description: 'Dark, dense, and deeply aromatic with toasted coriander and mountain honey.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    stats: { fermentation: '48h', hydration: '85%', grains: '5' }
  },
  {
    id: 'heirloom-spelt',
    name: 'Heirloom Spelt',
    description: 'Light, nutty profile using stone-ground spelt from small organic cooperatives.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800',
    stats: { fermentation: '24h', hydration: '78%', grains: '1' }
  }
];

const PROCESS_STEPS = [
  { title: 'The Culture', detail: 'A vibrant 150-year-old starter kept at precise temperatures.', icon: <Clock className="w-5 h-5" /> },
  { title: 'Stone Milling', detail: 'Grains milled hourly to preserve delicate oils and nutrients.', icon: <Wheat className="w-5 h-5" /> },
  { title: 'Wild Fire', detail: 'Baked in high-thermal mass ovens fueled by sustainable hardwoods.', icon: <Flame className="w-5 h-5" /> }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-bakery-900 selection:text-bakery-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-bakery-100/90 backdrop-blur-md py-4 border-bakery-900/10' : 'bg-transparent py-8 border-transparent'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <a href="#" className="font-serif text-2xl font-bold tracking-tight">MOUKA<span className="italic font-light">ARTISAN</span></a>
            <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest opacity-60">
              <a href="#breads" className="hover:opacity-100 transition-opacity">The Breads</a>
              <a href="#process" className="hover:opacity-100 transition-opacity">Our Process</a>
              <a href="#grains" className="hover:opacity-100 transition-opacity">Heritage Grains</a>
            </div>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-bakery-900/5 rounded-full transition-colors md:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden md:flex items-center gap-6">
             <a href="#" className="text-[11px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Find Us</a>
             <button className="bg-bakery-900 text-bakery-100 px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer">
               Pre-Order
             </button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bakery-100 md:hidden pt-32 px-10 flex flex-col"
          >
            <div className="flex flex-col gap-8">
              <a onClick={() => setIsMenuOpen(false)} href="#breads" className="font-serif text-5xl lowercase italic border-b border-bakery-900/10 pb-4">the breads</a>
              <a onClick={() => setIsMenuOpen(false)} href="#process" className="font-serif text-5xl lowercase italic border-b border-bakery-900/10 pb-4">our process</a>
              <a onClick={() => setIsMenuOpen(false)} href="#grains" className="font-serif text-5xl lowercase italic border-b border-bakery-900/10 pb-4">heritage grains</a>
              <div className="mt-12 flex gap-6">
                <Instagram className="w-6 h-6" />
                <MapPin className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-[110vh] flex flex-col justify-center items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1549438102-193c662ad36b?auto=format&fit=crop&q=80&w=2000" 
              alt="Sourdough Detail" 
              className="w-full h-full object-cover opacity-15 grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="container mx-auto px-6 z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] mb-12 opacity-40">Artistry in Fermentation</span>
                <h1 className="font-serif text-[18vw] md:text-[14vw] leading-[0.8] tracking-tighter text-bakery-900 uppercase">
                  <motion.span 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="block"
                  >
                    Bred to
                  </motion.span>
                  <motion.span 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="block italic font-light ml-[4vw]"
                  >
                    Last
                  </motion.span>
                </h1>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.2, duration: 1 }}
               className="mt-20 flex flex-col items-center gap-12"
            >
              <p className="max-w-md text-bakery-700 leading-relaxed font-medium text-lg">
                Resurrecting ancestral grains through extreme patience and wild fermentation.
              </p>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="cursor-pointer"
              >
                <ChevronDown className="w-5 h-5 opacity-40" />
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute left-10 bottom-12 hidden lg:block">
             <div className="flex items-center gap-6 origin-left -rotate-90">
               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">EST. 2024 — NEW YORK CITY</span>
               <div className="w-24 h-[1px] bg-bakery-900/20"></div>
             </div>
          </div>
        </section>

        {/* Collection Section */}
        <section id="breads" className="py-40 bg-bakery-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
              <div className="max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-40 mb-6 block">The Sourdough Collection</span>
                <h2 className="font-serif text-6xl md:text-[8rem] lowercase italic tracking-tight leading-none mb-4">daily batched.</h2>
                <div className="h-[1px] w-full bg-bakery-900/10"></div>
              </div>
              <div className="flex gap-4">
                <button className="p-6 border border-bakery-900/10 rounded-full hover:bg-bakery-900 hover:text-bakery-100 transition-all group">
                  <ArrowRight className="w-6 h-6 -rotate-180 group-hover:scale-110 transition-transform" />
                </button>
                <button className="p-6 border border-bakery-900/10 rounded-full hover:bg-bakery-900 hover:text-bakery-100 transition-all group">
                  <ArrowRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
              {BREAD_TYPES.map((bread, index) => (
                <motion.div 
                  key={bread.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-10 rounded-3xl relative">
                    <img 
                      src={bread.image} 
                      alt={bread.name} 
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-bakery-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-serif text-4xl mb-4 leading-tight">{bread.name}</h3>
                      <p className="text-bakery-700 text-sm leading-relaxed max-w-[300px]">
                        {bread.description}
                      </p>
                    </div>
                    <div className="text-[10px] font-mono opacity-30 border border-bakery-900/20 px-2.5 py-1 rounded-sm uppercase tracking-tighter">
                      batch 0{index + 1}
                    </div>
                  </div>
                  <div className="pt-8 border-t border-bakery-900/10 grid grid-cols-3 gap-6">
                    {Object.entries(bread.stats).map(([label, value]) => (
                      <div key={label}>
                        <div className="text-[9px] uppercase tracking-[0.2em] opacity-40 mb-2 font-bold">{label}</div>
                        <div className="text-base font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="bg-bakery-900 text-bakery-100 py-48 overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-square rounded-[4rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1549438102-193c662ad36b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Starter Culture" 
                    className="w-full h-full object-cover scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 animate-[spin_30s_linear_infinite] hidden md:block">
                  <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
                    <path id="circlePath2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text className="text-[7.5px] uppercase tracking-[0.25em] fill-bakery-100 font-bold">
                      <textPath xlinkHref="#circlePath2">
                        wild yeast • fire • heritage • time • patience •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </motion.div>

              <div className="order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] opacity-40 mb-10 block">The Sourdough Alchemy</span>
                <h2 className="font-serif text-6xl md:text-[8rem] mb-16 italic leading-[0.8] tracking-tighter">fire & time.</h2>
                <div className="space-y-16">
                  {PROCESS_STEPS.map((step, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 + 0.5 }}
                      viewport={{ once: true }}
                      className="flex gap-10 group"
                    >
                      <div className="w-16 h-16 rounded-full border border-bakery-100/10 flex items-center justify-center shrink-0 group-hover:border-bakery-100/40 transition-colors">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-serif italic mb-3">{step.title}</h4>
                        <p className="text-bakery-100/50 leading-relaxed text-sm max-w-sm">
                          {step.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <button className="mt-20 group flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:text-bakery-100/60 transition-colors">
                  The Full Philosophy
                  <div className="w-12 h-[1px] bg-bakery-100/20 group-hover:w-16 transition-all"></div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Grain Library */}
        <section id="grains" className="py-48 bg-bakery-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-40">
              <h2 className="font-serif text-7xl md:text-[11rem] tracking-tighter uppercase mb-6 leading-none">Heritage</h2>
              <div className="max-w-2xl mx-auto flex gap-10 items-start text-left mt-12">
                <div className="w-16 h-[2px] bg-bakery-900 mt-3 shrink-0"></div>
                <p className="text-bakery-800 italic text-2xl md:text-3xl leading-snug">
                  "We don't buy flour. We buy genetics. Preserved lines of grain that have fed humanity for millennia, untouched by industrial hybridization."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-bakery-900/5 p-16 lg:p-24 rounded-[3rem] transition-colors hover:bg-bakery-900/10"
              >
                <div className="aspect-[16/10] mb-16 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1542673080-60100efb49ca?auto=format&fit=crop&q=80&w=1200" 
                    alt="Ancient Wheat" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-5xl mb-8">Red Turkey Wheat</h3>
                <p className="text-bakery-700 leading-relaxed mb-12 text-lg italic">
                  Brought from the steppes of Eurasia, this hard red winter wheat delivers a complex, peppery profile with notes of dried plum and toasted hazelnut.
                </p>
                <div className="flex gap-16 border-t border-bakery-900/10 pt-10">
                   <div>
                     <span className="text-[10px] uppercase font-bold opacity-30 block mb-2 tracking-widest">Origin</span>
                     <span className="text-base font-serif italic">Crimean Highlands</span>
                   </div>
                   <div>
                     <span className="text-[10px] uppercase font-bold opacity-30 block mb-2 tracking-widest">Protein</span>
                     <span className="text-base font-serif italic">13.2%</span>
                   </div>
                </div>
              </motion.div>
              
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-bakery-900/5 p-16 lg:p-24 rounded-[3rem] transition-colors hover:bg-bakery-900/10"
              >
                <div className="aspect-[16/10] mb-16 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=1200" 
                    alt="Rye Fields" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-5xl mb-8">Emmer & Einkorn</h3>
                <p className="text-bakery-700 leading-relaxed mb-12 text-lg italic">
                  The original wild wheats. These primitive grains are low in gluten but rich in mineral depth, providing a distinct golden hue to our heirloom crumb.
                </p>
                <div className="flex gap-16 border-t border-bakery-900/10 pt-10">
                   <div>
                     <span className="text-[10px] uppercase font-bold opacity-30 block mb-2 tracking-widest">Origin</span>
                     <span className="text-base font-serif italic">Fertile Crescent</span>
                   </div>
                   <div>
                     <span className="text-[10px] uppercase font-bold opacity-30 block mb-2 tracking-widest">Protein</span>
                     <span className="text-base font-serif italic">11.8%</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bakery-100 py-48 border-t border-bakery-900/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <a href="#" className="font-serif text-5xl font-bold tracking-tight mb-10 block">MOUKA<span className="italic font-light">ARTISAN</span></a>
              <p className="text-bakery-700 max-w-sm mb-16 text-lg italic leading-relaxed">
                A laboratory dedicated to the slow movement of high-hydration wild yeast and biological preservation.
              </p>
              <div className="flex gap-10">
                <Instagram className="w-6 h-6 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
                <ArrowRight className="w-6 h-6 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>
            
            <div className="lg:col-span-3 lg:col-start-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 mb-10 block">The Laboratory</span>
              <ul className="space-y-6 text-base font-serif italic">
                <li><a href="#" className="hover:line-through transition-all opacity-80 hover:opacity-100">Journal</a></li>
                <li><a href="#" className="hover:line-through transition-all opacity-80 hover:opacity-100">Subscriptions</a></li>
                <li><a href="#" className="hover:line-through transition-all opacity-80 hover:opacity-100">Wholesale</a></li>
                <li><a href="#" className="hover:line-through transition-all opacity-80 hover:opacity-100">Contact</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 mb-10 block">Visit Us</span>
              <p className="text-base text-bakery-800 leading-loose font-serif italic">
                44 West 14th Street<br />
                New York, NY 10011<br />
                <span className="opacity-40 mt-6 block text-sm non-italic font-sans font-bold tracking-widest uppercase">Tue — Sun / 07:00 - 15:00</span>
              </p>
            </div>
          </div>
          
          <div className="mt-48 pt-12 border-t border-bakery-900/10 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">
             <span>© 2024 MOUKA ARTISAN — RECORDING THE SPEED OF YEAST</span>
             <div className="flex gap-12">
               <a href="#" className="hover:opacity-100">Privacy</a>
               <a href="#" className="hover:opacity-100">Logistics</a>
               <a href="#" className="hover:opacity-100">Sitemap</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
