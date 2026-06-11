import { useState } from 'react';
import { Menu, X, Sun, Moon, ShieldPlus } from 'lucide-react';

/**
 * Navbar Component
 * 
 * Features:
 * 1. Responsive mobile navigation (hamburger menu)
 * 2. Dark/Light mode theme toggle
 * 3. Sticky header with blur backdrop effect
 */
export default function Navbar({ darkMode, setDarkMode }) {
  // State to manage mobile menu open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Navigation link items (can be expanded easily)
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
              <ShieldPlus className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Medicare
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Toggler & Call to Action (CTA) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            {/* CTA Button */}
            <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-medium text-sm rounded-full shadow-sm hover:shadow transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Right Icons (Hamburger & Theme Toggle) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 pt-2 pb-6 flex flex-col gap-4 transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light py-2 border-b border-slate-50 dark:border-slate-800"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-2 py-3 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-medium text-sm rounded-full shadow-sm hover:shadow transition-all">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
