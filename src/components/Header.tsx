import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
  { code: 'de', label: 'DE' },
];

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/concept', label: t.nav.concept },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/booking', label: t.nav.booking },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-heading text-xl tracking-wide text-foreground">
            Floating Sauna
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm tracking-wide transition-colors hover:text-accent ${
                  location.pathname === item.path ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-1 text-xs font-body tracking-wider transition-colors ${
                  language === lang.code
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-body text-lg tracking-wide transition-colors ${
                      location.pathname === item.path ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex gap-4 pt-4 border-t border-border">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-sm font-body tracking-wider ${
                        language === lang.code ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
