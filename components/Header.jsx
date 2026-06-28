'use client';

import { PROFILE_IMAGE, ASSISTANT_NAME } from '@/lib/config';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Header({ isDark, onToggleTheme }) {
  return (
    <header className="flex-shrink-0 flex items-center gap-3 px-4 py-3 bg-gray-900 dark:bg-gray-900 border-b border-gray-700 shadow-md z-10">
      <div className="relative flex-shrink-0">
        <img
          src={PROFILE_IMAGE}
          alt={ASSISTANT_NAME}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-green-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='24' fill='%2316a34a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-size='18' font-family='sans-serif' font-weight='bold'%3EQP%3C/text%3E%3C/svg%3E";
          }}
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-gray-900" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white text-sm truncate leading-tight">
          {ASSISTANT_NAME}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-green-400 font-medium">En ligne</span>
        </div>
      </div>

      <button
        onClick={onToggleTheme}
        className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors flex-shrink-0"
        aria-label="Changer le thème"
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
}
