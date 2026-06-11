/**
 * Partners Component
 * 
 * Shows trusted company logos in clean, grayscale, responsive icons.
 * Demonstrates basic map rendering for listing brand logos.
 */
export default function Partners() {
  const companies = [
    { name: 'Google', logo: 'Google' },
    { name: 'Amazon', logo: 'Amazon' },
    { name: 'Slack', logo: 'Slack' },
    { name: 'PayPal', logo: 'PayPal' },
    { name: 'Zoom', logo: 'Zoom' },
    { name: 'Spotify', logo: 'Spotify' },
  ];

  return (
    <section className="py-12 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Caption */}
        <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-8">
          Trusted by 100+ Global top companies connecting with us
        </p>
        
        {/* Brand Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 dark:opacity-40">
          {companies.map((company) => (
            <div
              key={company.name}
              className="text-lg md:text-2xl font-black tracking-tight text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light hover:opacity-100 transition-all cursor-default duration-300"
            >
              {company.logo}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
