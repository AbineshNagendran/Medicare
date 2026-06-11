import { Smartphone, Calendar, FileText, MessageSquareLock, Globe, ArrowUpRight } from 'lucide-react';

/**
 * Features Component
 * 
 * Renders the Bento-grid styled section "Discover Our Benefits & Features".
 * It maps static feature data to custom styled blocks, implementing
 * micro-mockups (charts, flags, chat bubbles) directly in code using standard HTML/CSS.
 */
export default function Features() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Discover Our Benefits & Features
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm md:text-base">
            We provide a comprehensive suite of digital health solutions to make premium healthcare accessible, secure, and personalized.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Mobile Health Apps */}
          <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-lg transition-all group duration-300">
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl w-fit">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Mobile Health Apps</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Tools for patients to track symptoms, manage medications, and check records on the go.
                </p>
              </div>
            </div>
            
            {/* App Mockup Visual */}
            <div className="mt-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm relative overflow-hidden h-28 flex items-center justify-center">
              <div className="w-24 h-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-t-xl absolute bottom-0 flex flex-col items-center pt-2 px-1">
                <div className="w-8 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mb-2"></div>
                <div className="w-16 h-12 bg-primary/10 rounded-lg flex flex-col items-center justify-center gap-1">
                  <div className="w-8 h-1 bg-primary rounded-full"></div>
                  <div className="w-10 h-1 bg-primary/50 rounded-full"></div>
                  <div className="w-6 h-1.5 bg-accent-pink rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Personal Health Dashboard & Booking System (Col-span 2 on Desktop) */}
          <div className="md:col-span-2 bg-slate-50 dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-lg transition-all group duration-300">
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl w-fit">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Personal Health Dashboard & Appointment Booking</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Schedule consultations with global specialists, access clinical logs, and view recovery progress.
                </p>
              </div>
            </div>

            {/* Dashboard / Booking UI Mockup */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">Upcoming Consultation</h4>
                <div className="flex items-center gap-3 bg-primary/5 p-2 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xs text-primary">DR</div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-900 dark:text-white leading-none">Dr. Nguyen MD</p>
                    <p className="text-[9px] text-slate-500 mt-1">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Simple Chart Mockup */}
              <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Weekly Health Metric</span>
                  <span className="text-[10px] text-emerald-500 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded-full">+12%</span>
                </div>
                <div className="flex items-end gap-2 h-10 pt-2">
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-[40%] rounded-sm"></div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-[60%] rounded-sm"></div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-[50%] rounded-sm"></div>
                  <div className="w-full bg-primary/50 h-[80%] rounded-sm"></div>
                  <div className="w-full bg-primary h-[95%] rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Online Prescription Services */}
          <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-lg transition-all group duration-300">
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Online Prescription Services</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Facilitate easy ordering, digital prescription refills, and straight-to-door medicine delivery.
                </p>
              </div>
            </div>

            {/* Prescription Sheet Visual */}
            <div className="mt-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm flex flex-col gap-2 h-28 justify-center">
              <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-1.5">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Prescription RX #1092</span>
              </div>
              <div className="space-y-1">
                <div className="w-24 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                <div className="w-32 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Secure Messaging Systems */}
          <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-lg transition-all group duration-300">
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-2xl w-fit">
                <MessageSquareLock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Secure Messaging</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Fully HIPAA-compliant chat platforms guaranteeing secure, instant communication with specialists.
                </p>
              </div>
            </div>

            {/* Chat Bubble Mockup */}
            <div className="mt-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-3 shadow-sm space-y-2 h-28 overflow-hidden flex flex-col justify-center">
              <div className="bg-primary/10 text-primary p-2 rounded-xl rounded-tl-none self-start text-[10px] max-w-[80%] leading-snug">
                Hello doctor, when should I take my pills?
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 p-2 rounded-xl rounded-tr-none self-end text-[10px] max-w-[80%] leading-snug">
                Take them right after dinner.
              </div>
            </div>
          </div>

          {/* Card 5: Online Global Services */}
          <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-lg transition-all group duration-300">
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-2xl w-fit">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Online Global Services</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Borderless care. Consult, communicate, and pay from any country worldwide.
                </p>
              </div>
            </div>

            {/* Flag Dropper Visual */}
            <div className="mt-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-3 shadow-sm h-28 flex flex-col justify-center gap-2">
              <div className="flex items-center justify-between border border-slate-100 dark:border-slate-700 p-1.5 rounded-lg text-[10px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🇺🇸</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">United States (+1)</span>
                </div>
                <span className="text-slate-400">▼</span>
              </div>
              <div className="flex gap-2">
                <span className="text-base p-1 bg-slate-50 dark:bg-slate-700 rounded border border-slate-100 dark:border-slate-600">🇩🇪</span>
                <span className="text-base p-1 bg-slate-50 dark:bg-slate-700 rounded border border-slate-100 dark:border-slate-600">🇬🇧</span>
                <span className="text-base p-1 bg-slate-50 dark:bg-slate-700 rounded border border-slate-100 dark:border-slate-600">🇮🇳</span>
              </div>
            </div>
          </div>

          {/* Card 6: Explore More (CTA Gradient Card) */}
          <div className="bg-gradient-to-br from-primary to-accent-pink p-8 rounded-3xl text-white flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            
            {/* Ambient background blur circles */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
            
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">Explore our more amazing services</h3>
              <p className="text-sm opacity-90 mt-3 leading-relaxed">
                Connect with our teams, learn about health plans, and unlock customizable workflows for corporate teams.
              </p>
            </div>
            
            <button className="mt-8 flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-full font-bold text-sm w-fit shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Discover Services
              <ArrowUpRight className="h-4.5 w-4.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
