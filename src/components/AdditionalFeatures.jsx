import { Check, MapPin, Phone, Clock } from 'lucide-react';
import mapMockupImg from '../assets/map-mockup.png';

/**
 * AdditionalFeatures Component
 * 
 * Shows a split screen layout.
 * Left Side: Map mockup with location pin and interactive overlay card.
 * Right Side: List of medical benefits with clean custom SVG checkmarks.
 */
export default function AdditionalFeatures() {
  const checklist = [
    { title: 'Personalised Health Plans', desc: 'Custom diets and daily exercises designed for your body type.' },
    { title: 'Integration with Pharmacy Service', desc: 'Direct prescriptions sent to nearby pharmacies automatically.' },
    { title: 'Emergency Services Support', desc: '24/7 priority line connectable to dispatch units in minutes.' },
    { title: 'Patient Education Resources', desc: 'Free articles, booklets, and videos curated by expert panels.' },
    { title: 'Virtual Health Assistant', desc: 'Symptom-checking AI chatbot helping clarify signs prior to calls.' },
    { title: 'Periodic Checking Logs', desc: 'Automated bi-weekly notifications reminding patients to report health logs.' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Map with Overlay Card */}
        <div className="relative order-2 lg:order-1 flex justify-center">
          
          {/* Map Frame */}
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md">
            
            {/* Map image generated via AI */}
            <img
              src={mapMockupImg}
              alt="Map location mockup"
              className="w-full h-full object-cover filter saturate-[0.8] dark:brightness-[0.9]"
            />
            
            {/* Location Pin Ring overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                <span className="relative inline-flex rounded-full h-8 w-8 bg-primary/20 items-center justify-center text-primary border border-primary">
                  <MapPin className="h-4.5 w-4.5 fill-current" />
                </span>
              </span>
            </div>

            {/* Overlaid Clinic Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-lg flex flex-col gap-3">
              
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Medicare Center Location</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">78/B Medical Ave, Tech City</p>
                </div>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  HQ Clinic
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 dark:text-slate-350 border-t border-slate-100 dark:border-slate-750 pt-2">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-primary" />
                  <span>08:00 AM - 08:00 PM</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end">
                  <Phone className="h-3 w-3 text-primary" />
                  <span>+1 (234) 567 89</span>
                </div>
              </div>

              <button className="w-full py-2 bg-primary hover:bg-primary-dark text-white font-bold text-xs rounded-xl transition-colors shadow-sm shadow-primary/10">
                Book Appointment
              </button>

            </div>

          </div>
        </div>

        {/* Right Side: Additional Features List */}
        <div className="text-left order-1 lg:order-2">
          
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-light">
            Exceptional Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Additional Medical Features
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 rounded-full mb-6"></div>
          
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
            Beyond standard clinical tests, our systems are engineered to facilitate ongoing post-recovery communication and remote monitoring for high-risk patients.
          </p>

          {/* Grid of bullet checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {checklist.map((item, index) => (
              <div key={index} className="flex gap-3 items-start group">
                <div className="mt-0.5 p-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-350">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 px-6 py-3 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-bold rounded-full shadow-sm hover:shadow transition-all">
            Read More Features
          </button>

        </div>

      </div>
    </section>
  );
}
