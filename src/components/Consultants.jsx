import { Star, MessageSquare } from 'lucide-react';
import doctorMika from '../assets/doctor-mika.png';
import doctorNguyen from '../assets/doctor-nguyen.png';
import doctorFlores from '../assets/doctor-flores.png';

/**
 * Consultants Component
 * 
 * Lists expert online doctors (Mika, Nguyen, Flores).
 * Shows how to organize mock data arrays and render sub-components like Doctor Cards.
 */
export default function Consultants() {
  // Consultant Profiles mock data
  const consultants = [
    {
      id: 1,
      name: 'Dr. Mika Ela',
      specialty: 'Orthopedic Specialist',
      rating: 4.9,
      reviews: 140,
      image: doctorMika,
    },
    {
      id: 2,
      name: 'Dr. Nguyen Huy',
      specialty: 'Cardiology Specialist',
      rating: 4.8,
      reviews: 210,
      image: doctorNguyen,
    },
    {
      id: 3,
      name: 'Dr. Flores Marie',
      specialty: 'Dermatology Specialist',
      rating: 4.9,
      reviews: 185,
      image: doctorFlores,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Collaborate with our best consultant online
            </h2>
            <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
              Patients can consult with healthcare providers from the comfort of their homes, eliminating travel time and costs. Experience reduced waiting times and immediate responses.
            </p>
          </div>
          <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all self-start lg:self-auto">
            Book Consultant
          </button>
        </div>

        {/* Consultant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultants.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              
              {/* Image Frame with gradient backdrop */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-50 to-primary/5 dark:from-slate-750 dark:to-slate-700 overflow-hidden mb-5">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Doctor Info */}
              <div className="text-left flex-grow">
                
                {/* Specialty tag */}
                <span className="text-[11px] font-bold tracking-wider uppercase text-primary dark:text-primary-light">
                  {doctor.specialty}
                </span>
                
                {/* Name */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {doctor.name}
                </h3>
                
                {/* Ratings */}
                <div className="flex items-center text-amber-500 mt-2 text-xs">
                  <div className="flex mr-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-bold">
                    {doctor.rating}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 ml-1">
                    ({doctor.reviews} reviews)
                  </span>
                </div>

              </div>

              {/* Card CTA button */}
              <div className="mt-6 border-t border-slate-50 dark:border-slate-700/50 pt-4 flex items-center justify-between">
                <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Available Today
                </span>
                
                <button className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 dark:bg-slate-700 hover:bg-primary dark:hover:bg-primary text-white text-xs font-bold rounded-full transition-colors group-hover:shadow-md">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Consult
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
