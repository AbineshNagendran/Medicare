import { Play, Star, Plus } from 'lucide-react';
import doctorHeroImg from '../assets/doctor-hero.png';

/**
 * Hero Component
 * 
 * Presents the core value proposition of Medicare.
 * Includes text, custom styled CTA buttons, a reviews social-proof block,
 * and a doctor portrait with overlayed cards/badges.
 */
export default function Hero() {
  return (
    <section id="home" className="relative bg-slate-50 dark:bg-slate-900/40 py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content & CTAs */}
        <div className="flex flex-col gap-6 text-left max-w-xl mx-auto lg:mx-0">
          
          {/* Small pill badge */}
          <div className="inline-flex items-center self-start gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary dark:text-primary-light">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            Medicare Premium Services
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Get Premium <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">medical care</span> for your best health
          </h1>
          
          {/* Description Paragraph */}
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Our doctors are ready to support your health. We provide the best medical services for our customers. Find a doctor, book an appointment, and consult online effortlessly.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-semibold rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all">
              Make a Booking
            </button>
            
            <button className="flex items-center gap-2.5 px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 shadow-sm hover:shadow transition-all group">
              <span className="p-1 bg-slate-100 dark:bg-slate-700 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <Play className="h-4.5 w-4.5 fill-current" />
              </span>
              Watch Video
            </button>
          </div>

          {/* Social Proof (Happy Customers) */}
          <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6 mt-4">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces'
              ].map((src, index) => (
                <img
                  key={index}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                  src={src}
                  alt="Customer avatar"
                />
              ))}
            </div>
            
            <div>
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-1 text-slate-800 dark:text-slate-200 font-bold text-sm">4.9</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Loved by <strong>12k+ Happy Customers</strong>
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Doctor Image and floating cards */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* Main Doctor Frame */}
          <div className="relative w-80 h-96 sm:w-96 sm:h-[450px] bg-gradient-to-tr from-primary/10 to-primary-light/5 rounded-3xl overflow-visible border border-slate-100 dark:border-slate-800/50 shadow-md">
            
            {/* Main Portrait */}
            <img
              src={doctorHeroImg}
              alt="Smiling Doctor"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[105%] w-auto max-w-none object-contain drop-shadow-2xl filter saturate-[1.05]"
            />
            
            {/* Floating Card 1: Online Status */}
            <div className="absolute -top-4 -left-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce [animation-duration:5s]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Online Consultation
              </span>
            </div>

            {/* Floating Card 2: Dr. Catherine Card */}
            <div className="absolute bottom-16 -left-10 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 p-4 rounded-2xl shadow-xl flex items-center gap-3 transition-transform hover:scale-105 duration-300">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                C
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-none">Dr. Catherine</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Pediatrician specialist</p>
                <div className="flex items-center text-amber-500 mt-1 text-[10px]">
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <span className="ml-1 text-slate-700 dark:text-slate-300 font-semibold">4.9</span>
                </div>
              </div>
            </div>

            {/* Floating Card 3: 99% Success Badge */}
            <div className="absolute right-4 bottom-8 bg-gradient-to-br from-primary to-primary-light text-white p-3 rounded-2xl shadow-lg text-center transform hover:rotate-3 transition-transform duration-300">
              <p className="text-xs font-semibold opacity-90 leading-tight">Patient Support</p>
              <h3 className="text-lg font-bold mt-0.5">99.8%</h3>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
