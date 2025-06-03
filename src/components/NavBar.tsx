"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  // Debounce scroll handler
  useEffect(() => {
    console.log("in thus ")
    let timeoutId: NodeJS.Timeout;

    const scrollLogic = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 50);

        // Section detection logic
        const sections = ['profile', 'projects', 'skills', 'hackathon', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              // Update URL without triggering scroll
              if (pathname === '/portfolio') {
                window.history.replaceState(null, '', `#${section}`);
              }
              break;
            }
          }
        }
      }, 100);
    };

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash.substring(1);
        if (hash && ['profile', 'projects', 'skills', 'hackathon', 'contact'].includes(hash)) {
          scrollLogic();
        } else {
          setActiveSection("");
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  // Handle initial hash on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash && ['profile', 'projects', 'skills', 'hackathon', 'contact'].includes(hash)) {
        scrollToSection(hash, false);
      } else {
        setActiveSection("");
      }
    }
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'devanResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: 'profile', label: 'Profile' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string, shouldPushState = true) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMenuOpen(false);

      if (shouldPushState && pathname === '/portfolio') {
        window.history.pushState(null, '', `#${id}`);
      }
    } else {
      router.push(`/portfolio/#${id}`)
      setActiveSection(id);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0  md:w-full w-screen z-[99] transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} dark:bg-black/10 dark:backdrop-blur-md bg-white/80 backdrop-blur-md'}`}
      // initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full  justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              onClick={() => {
                router.push("/portfolio");
                if (pathname === '/portfolio') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveSection('profile');
                  window.history.pushState(null, '', '/portfolio');
                }
              }}
              className={`hover:cursor-pointer text-xl font-bold dark:text-purple-400 text-purple-600`}
              whileHover={{ scale: 1.05 }}
            >
              DevanAI
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${theme == "dark" ?
                  (activeSection === item.id ? 'text-purple-400' : 'text-purple-300 hover:text-purple-300') :
                  (activeSection === item.id ? 'text-purple-600' : 'text-purple-400 hover:text-purple-500')}`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${theme == "dark" ? 'bg-purple-400' : 'bg-purple-600'}`}
                    layoutId="navUnderline"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}

            <motion.button
              className={`px-4 py-2 rounded-lg ${theme == "dark" ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'} font-medium transition-colors`}
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ">
            <motion.button
              className={`p-2 rounded-md ${theme == "dark" ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} focus:outline-none`}
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          className={`md:hidden bg-gray-800 shadow-lg `}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${theme == "dark" ?
                  (activeSection === item.id ? 'bg-gray-900 text-purple-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white') :
                  (activeSection === item.id ? 'bg-gray-100 text-purple-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')}`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.02 }}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.button
              className={`block w-full px-3 py-2 rounded-md text-base font-medium text-left ${theme == "dark" ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'}`}
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Resume
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;