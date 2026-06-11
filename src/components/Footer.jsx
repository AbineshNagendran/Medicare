import { ShieldPlus, ArrowRight } from 'lucide-react';

/**
 * Footer Component
 * 
 * Renders the dark slate footer with multi-column links,
 * newsletter subscribe block, and social media links.
 */
export default function Footer() {
  // Navigation Links grouping
  const linkGroups = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blogs', 'Press Release'],
    },
    {
      title: 'Features',
      links: ['Mobile App', 'Easy Booking', 'Consultation', 'Dashboard UI'],
    },
    {
      title: 'Solutions',
      links: ['Personal Plans', 'Family Plans', 'Corporate Teams', 'Enterprise'],
    },
    {
      title: 'For Partners',
      links: ['For Clinics', 'For Doctors', 'Partnerships', 'API Integrations'],
    },
  ];

  return (
    <footer id="blog" className="bg-slate-950 text-slate-400 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header of Footer */}
        <div className="border-b border-slate-900 pb-12 mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Let's Connect with us
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Stay in the loop with our clinical updates and health tips.
            </p>
          </div>
          
          {/* Newsletter Input Form */}
          <div className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 bg-slate-900 border border-slate-800 text-white rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full sm:w-72"
              />
              <button className="flex items-center justify-center gap-1.5 px-6 py-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-bold text-sm rounded-full shadow-lg shadow-primary/10 transition-colors">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Links & Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2 text-white">
              <div className="p-2 bg-primary/20 rounded-xl text-primary-light">
                <ShieldPlus className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">Medicare</span>
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Medicare is a global premium telehealth platform connecting patients with top-tier verified medical consultants online from any country.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {[
                {
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  ),
                  href: '#'
                },
                {
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  ),
                  href: '#'
                },
                {
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  ),
                  href: '#'
                },
                {
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                  href: '#'
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 bg-slate-900 hover:bg-primary hover:text-white rounded-full text-slate-400 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {linkGroups.map((group, i) => (
            <div key={i} className="text-left flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2 text-xs">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-primary-light transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Footer Bottom (App Store Badges & Legal) */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-end items-center gap-6">
          
          {/* App download badges */}
          <div className="flex items-center gap-3">
            {/* App Store Mock Button */}
            <button className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-850 px-4 py-2 rounded-xl text-white text-left transition-colors">
              <span className="text-lg">🍎</span>
              <div className="leading-tight">
                <p className="text-[9px] text-slate-500 font-semibold uppercase">Download on</p>
                <p className="text-xs font-bold">App Store</p>
              </div>
            </button>

            {/* Google Play Mock Button */}
            <button className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-850 px-4 py-2 rounded-xl text-white text-left transition-colors">
              <span className="text-lg">🤖</span>
              <div className="leading-tight">
                <p className="text-[9px] text-slate-500 font-semibold uppercase">Get it on</p>
                <p className="text-xs font-bold">Google Play</p>
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
