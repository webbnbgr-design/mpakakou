/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Scale, 
  Gavel, 
  Wallet, 
  FileText, 
  Users, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Handshake, 
  Briefcase 
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
      <Scale className="text-white w-6 h-6" />
    </div>
    <div className="flex flex-col">
      <span className="font-serif font-bold text-lg leading-tight tracking-tight text-brand-blue">ΑΝΝΑ-ΜΑΡΙΑ ΜΠΑΚΑΚΟΥ</span>
      <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ</span>
    </div>
  </div>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors px-1 py-2 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold/20">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Glassmorphism Header */}
      <header className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#profile">Προφίλ</NavLink>
              <NavLink href="#criminal">Ποινικολόγος</NavLink>
              <NavLink href="#financial">Ρύθμιση Οφειλών</NavLink>
              <NavLink href="#civil">Αστικό Δίκαιο</NavLink>
              <NavLink href="#contact">Επικοινωνία</NavLink>
              <a 
                href="tel:2231036722"
                className="bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-900/10"
              >
                2231036722
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-brand-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 pt-20"
          >
            <a href="#profile" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-brand-blue">Προφίλ</a>
            <a href="#criminal" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-brand-blue">Ποινικολόγος</a>
            <a href="#financial" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-brand-blue">Ρύθμιση Οφειλών</a>
            <a href="#civil" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-brand-blue">Αστικό Δίκαιο</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-brand-blue">Επικοινωνία</a>
            <div className="flex flex-col gap-4 items-center mt-4">
              <a href="tel:2231036722" className="flex items-center gap-2 text-xl font-bold text-brand-blue"><Phone size={20} /> 2231036722</a>
              <a href="tel:6974135720" className="flex items-center gap-2 text-xl font-bold text-brand-gold"><Phone size={20} /> 6974135720</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 mesh-gradient overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 skew-x-[-15deg] translate-x-1/2 z-0 hidden lg:block" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
                  <ShieldCheck size={14} className="text-brand-gold" />
                  Μάχιμη & Ολιστική Εκπροσώπηση
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8 text-gradient">
                  Άννα-Μαρία Μπακάκου: Ολοκληρωμένη Νομική Καθοδήγηση & Μαχητική Υπεράσπιση σε κάθε σας βήμα
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
                  Στη Λαμία, το δικηγορικό μας γραφείο αποτελεί τον αξιόπιστο σύμμαχο κάθε πολίτη. Με εστίαση στα κρίσιμα νομικά και οικονομικά ζητήματα, προσφέρουμε λύσεις που εκπέμπουν εμπιστοσύνη και δυναμισμό.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:6974135720"
                    className="flex justify-center items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-900/20"
                  >
                    Κλείστε Ραντεβού για Νομική Αξιολόγηση <ArrowRight size={20} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#financial"
                    className="flex justify-center items-center gap-2 bg-white text-brand-blue border border-slate-200 px-8 py-4 rounded-full font-bold shadow-soft"
                  >
                    Προστασία Οφειλετών
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Element for Hero */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-10 bottom-20 hidden xl:block z-20 pointer-events-none"
          >
            <div className="glass p-8 rounded-3xl border shadow-2xl max-w-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <Gavel size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-blue mb-1">Άμεση Ανταπόκριση</h4>
                  <p className="text-sm text-slate-500 leading-relaxed italic">"Στεκόμαστε δίπλα σας με ειλικρίνεια και αποτελεσματικότητα."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                  <div className="aspect-[4/5] bg-slate-200 flex items-center justify-center overflow-hidden">
                     <Users size={80} className="text-slate-400 opacity-20" />
                     {/* Placeholder for real portrait */}
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
                     <div className="absolute bottom-10 left-10 text-white">
                        <p className="text-sm uppercase tracking-widest font-bold text-brand-gold mb-2">Lawyer • Lamia</p>
                        <h3 className="text-3xl font-serif font-bold">Άννα-Μαρία Μπακάκου</h3>
                     </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl z-0" />
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl z-0" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-serif font-bold mb-6 text-brand-blue">Client-Centric Philosophy</h2>
                <div className="w-20 h-1 bg-brand-gold mb-8" />
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Ως μέλος του Δικηγορικού Συλλόγου Λαμίας, η Άννα-Μαρία Μπακάκου χτίζει σχέσεις εμπιστοσύνης με κάθε εντολέα. Πιστεύουμε ότι κάθε υπόθεση είναι μοναδική και απαιτεί προσωπική ενασχόληση και πλήρη καθοδήγηση.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Το brand voice μας είναι υποστηρικτικό αλλά και μαχητικό. "Στεκόμαστε δίπλα" στον πολίτη στη Λαμία και σε ολόκληρη τη Φθιώτιδα, διασφαλίζοντας ότι η φωνή του ακούγεται καθαρά στη δικαιοσύνη.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-brand-gold pl-4 py-2">
                    <span className="block text-2xl font-bold text-brand-blue">100%</span>
                    <span className="text-sm text-slate-500 uppercase tracking-wider">Προσωπική Ενασχόληση</span>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4 py-2">
                    <span className="block text-2xl font-bold text-brand-blue">24/7</span>
                    <span className="text-sm text-slate-500 uppercase tracking-wider">Υποστηρικτική Παρουσία</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Πυλώνες Εξειδίκευσης</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Στρατηγική νομική υποστήριξη σε ένα ευρύ φάσμα δικαιοδοσιών με έμφαση στα αποτελέσματα.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Criminal Defense */}
              <motion.div 
                whileHover={{ y: -10 }}
                id="criminal"
                className="md:col-span-2 md:row-span-2 bg-brand-blue rounded-3xl p-10 flex flex-col justify-between text-white overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                    <Gavel size={32} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-6">Criminal Defense Specialist</h3>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
                    Παρέχουμε πλήρη καθοδήγηση και υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας. Από την προδικασία και την προανάκριση, έως την εκπροσώπηση στο ακροατήριο, διασφαλίζουμε τα δικαιώματά σας με δυναμισμό.
                  </p>
                  <ul className="space-y-4 text-blue-50 font-medium">
                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-brand-gold" /> Στρατηγική υπεράσπισης</li>
                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-brand-gold" /> Εκπροσώπηση σε όλα τα δικαστήρια</li>
                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-brand-gold" /> Υποστήριξη κατηγορουμένων & θυμάτων</li>
                  </ul>
                </div>
                <div className="mt-8 relative z-10 flex justify-end">
                   <div className="bg-brand-gold p-4 rounded-full shadow-2xl group-hover:scale-110 transition-transform">
                      <Scale size={24} className="text-brand-blue" />
                   </div>
                </div>
              </motion.div>

              {/* Card 2: Financial/Debt Hub */}
              <motion.div 
                whileHover={{ y: -10 }}
                id="financial"
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft flex flex-col justify-between group hover:border-brand-gold/50 transition-colors"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
                    <Wallet size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4">Financial Protection Hub</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    Εξειδίκευση σε "Κόκκινα Δάνεια" και "Υπερχρεωμένα Νοικοκυριά". Προσφέρουμε πραγματικές λύσεις και προστασία στους οφειλέτες της Φθιώτιδας.
                  </p>
                </div>
                <a href="tel:2231036722" className="text-brand-blue font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Μάθετε περισσότερα <ArrowRight size={18} />
                </a>
              </motion.div>

              {/* Card 3: Civil Law */}
              <motion.div 
                whileHover={{ y: -10 }}
                id="civil"
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft flex flex-col justify-between group hover:border-brand-gold/50 transition-colors"
              >
                <div>
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform">
                    <Handshake size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4">Αστικό & Εμπορικό Δίκαιο</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    Διαχείριση οικογενειακών διαφορών, συμβάσεων, μισθώσεων και εμπορικών συμφωνιών με γνώμονα τη βιωσιμότητα.
                  </p>
                </div>
                <a href="#contact" className="text-brand-blue font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Εξειδικευμένη συμβουλευτική <ArrowRight size={18} />
                </a>
              </motion.div>

              {/* Card 4: Administrative Law */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-slate-900 rounded-3xl p-8 text-white flex items-center gap-6 md:col-span-3 border border-white/5 hover:bg-slate-800 transition-colors"
              >
                <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center shrink-0 border border-brand-gold/30">
                  <FileText size={32} className="text-brand-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-2">Διοικητικό Δίκαιο</h3>
                  <p className="text-slate-400 max-w-2xl leading-relaxed">
                    Υπεράσπιση των συμφερόντων σας έναντι του δημοσίου. Διακανονισμοί, ενστάσεις και διοικητικές προσφυγές με υψηλή επιτυχία.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <Briefcase size={40} className="opacity-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
              <div className="p-12 lg:p-20 flex-1 text-white">
                <h2 className="text-4xl font-serif font-bold mb-8">Στρατηγικό Σημείο στη Λαμία</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                      <MapPin className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Διεύθυνση Γραφείου</h4>
                      <p className="text-blue-100 italic">Λεωνίδου 6 & Πατρόκλου, Λαμία</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                      <Phone className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Τηλέφωνα Επικοινωνίας</h4>
                      <div className="flex flex-col text-blue-100">
                        <a href="tel:2231036722" className="hover:text-white transition-colors">2231036722</a>
                        <a href="tel:6974135720" className="hover:text-white transition-colors">6974135720</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                   <p className="text-blue-300 text-sm leading-relaxed max-w-md">
                     Το γραφείο μας βρίσκεται στην καρδιά της Λαμίας, καθιστώντας την πρόσβαση εύκολη για τους κατοίκους της Φθιώτιδας και των γύρω περιοχών.
                   </p>
                </div>
              </div>
              <div className="flex-1 bg-slate-200 relative min-h-[400px]">
                {/* Visual Representation of Map/Office */}
                <div className="absolute inset-0 bg-slate-800/10 flex items-center justify-center p-10">
                   <div className="w-full h-full border-4 border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl transform -rotate-2">
                        <MapPin size={48} className="text-brand-blue mx-auto mb-4" />
                        <p className="font-serif font-bold text-brand-blue">Λεωνίδου 6, Λαμία</p>
                        <p className="text-xs text-slate-400 mt-2">Κέντρο Πόλης</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section id="contact" className="py-24 relative overflow-hidden bg-brand-lgrey">
          <div className="absolute inset-0 mesh-gradient opacity-50 z-0" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-8">
               Χρειάζεστε Νομική Καθοδήγηση;
             </h2>
             <p className="text-xl text-slate-600 mb-12">
               Μη διστάσετε να επικοινωνήσετε μαζί μας για μια πρώτη αξιολόγηση της υπόθεσής σας. Η εμπειρία και η μαχητικότητά μας είναι στην υπηρεσία σας.
             </p>
             <div className="flex flex-wrap justify-center gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:2231036722"
                  className="bg-brand-blue text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl shadow-blue-900/30"
                >
                  <Phone size={24} /> Καλέστε στο 2231036722
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:6974135720"
                  className="bg-white text-brand-blue border-2 border-brand-blue px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 shadow-xl"
                >
                  <Phone size={24} /> Κινητό: 6974135720
                </motion.a>
             </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <Logo />
              <p className="mt-6 text-slate-500 leading-relaxed max-w-sm italic">
                "Δίπλα στον πολίτη με ειλικρίνεια και δυναμισμό. Η εμπιστοσύνη σας είναι η δέσμευσή μας για το καλύτερο δυνατό αποτέλεσμα."
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-brand-blue mb-6">Υπηρεσίες</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                 <li>Ποινικό Δίκαιο</li>
                 <li>Ρύθμιση Οφειλών (Κόκκινα Δάνεια)</li>
                 <li>Αστικό Δίκαιο</li>
                 <li>Διοικητικό Δίκαιο</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-brand-blue mb-6">SEO Μετά</h4>
              <ul className="space-y-3 text-slate-400 text-xs uppercase tracking-widest font-semibold flex flex-wrap gap-2 md:block">
                 <li>#Δικηγόρος Λαμία</li>
                 <li>#Άννα Μαρία Μπακάκου</li>
                 <li>#Κόκκινα δάνεια Λαμία</li>
                 <li>#Ποινικολόγος Λαμία</li>
                 <li>#Υπερχρεωμένα νοικοκυριά Φθιώτιδα</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-50 flex flex-col md:row items-center justify-between gap-4 text-slate-400 text-xs">
            <p>© {new Date().getFullYear()} Άννα-Μαρία Μπακάκου - Δικηγορικό Γραφείο. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-brand-blue transition-colors">Πολιτική Απορρήτου</a>
               <a href="#" className="hover:text-brand-blue transition-colors">Όροι Χρήσης</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
