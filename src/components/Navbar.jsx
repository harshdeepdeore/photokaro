import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'PROCESS', path: '/process' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-200">
      <nav 
        className="max-w-site mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Left: Brand Wordmark */}
        <div className="flex-1 flex items-center">
          <Link 
            to="/" 
            className="text-lg sm:text-xl font-bold tracking-widest text-primary hover:opacity-80 transition-opacity"
            aria-label="PhotoKaro Home"
          >
            PHOTO KARO
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-semibold tracking-wider transition-colors py-2 ${
                isActive(link.path)
                  ? 'text-primary border-b border-primary'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Primary CTA */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <Link
            to="/start-project"
            className="group inline-flex items-center space-x-2 bg-primary text-white text-xs font-semibold tracking-wider px-5 py-3 rounded-full hover:bg-primary-hover transition-all duration-300 shadow-sm"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-primary hover:text-secondary focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold tracking-wider py-2 transition-colors ${
                  isActive(link.path) ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <Link
              to="/start-project"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between w-full bg-primary text-white text-xs font-semibold tracking-wider px-5 py-3.5 rounded-full hover:bg-primary-hover transition-colors"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
