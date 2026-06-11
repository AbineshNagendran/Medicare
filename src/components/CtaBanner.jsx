import molecule3dImg from '../assets/3d-molecule.png';

/**
 * CtaBanner Component
 * 
 * Renders the prominent purple call-to-action banner card.
 * Left: 3D purple cell graphic.
 * Right: Text invitation and "Get Started" button.
 */
export default function CtaBanner() {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="relative bg-gradient-to-r from-primary-dark via-primary to-primary-light rounded-3xl overflow-hidden px-8 py-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary/20">
          
          {/* Ambient light effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          
          {/* Left: 3D Cell Graphic */}
          <div className="flex-shrink-0 w-44 h-44 relative animate-pulse [animation-duration:4s]">
            <img
              src={molecule3dImg}
              alt="3D Molecule Cell"
              className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)] filter saturate-[1.15]"
            />
          </div>

          {/* Right/Content: Text & Button */}
          <div className="text-center md:text-left md:max-w-xl flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Bring your customer services to the next level of excellence
            </h2>
            <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
              Empower your patients with seamless virtual appointment options, digitized logs, and real-time support. Let's make healthcare excellent.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button className="px-8 py-4 bg-white text-primary dark:text-primary-dark font-extrabold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
