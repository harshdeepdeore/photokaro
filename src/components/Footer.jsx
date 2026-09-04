import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    { name: 'WORK', path: '/work' },
    { name: 'PROCESS', path: '/process' },
    { name: 'ABOUT', path: '/about' },
    { name: 'START A PROJECT', path: '/start-project' },
  ];

  return (
    <footer className="border-t border-border bg-background py-16 sm:py-20">
      <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Brand Statement */}
        <div className="space-y-2 max-w-sm">
          <Link to="/" className="text-sm font-bold tracking-widest text-primary block">
            PHOTO KARO
          </Link>
          <p className="text-xs text-muted leading-relaxed">
            Premium e-commerce visual production. Turning product photos into sales-ready commercial visual content.
          </p>
        </div>

        {/* Minimal Navigation Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-xs font-semibold tracking-wider text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Subtle Copyright Line */}
      <div className="max-w-site mx-auto px-6 sm:px-8 lg:px-12 mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted gap-4">
        <span>&copy; {new Date().getFullYear()} PhotoKaro. All rights reserved.</span>
        <span>Sales-ready product content studio</span>
      </div>
    </footer>
  );
}
